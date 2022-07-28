import React, { useContext, useEffect } from 'react'
import style from './MenuPage.module.css'
import SearchInput from '@Menu/components/SearchInput/SearchInput'
import Category from '@Menu/components/Category/Category'
import Header from '@App/components/Header/Header'
import AppBar from '@App/components/AppBar/AppBar'
import MenuBannerJpg from '@App/assets/banner-cardapio.jpg'
import { MenuContext } from '@Menu/context/menu-context'
import { useSelectorGetMenu, useSelectorGetDrinks } from '@Menu/store/selectors'

export default function MenuPage() {
    const { state, fetchMenu } = useContext(MenuContext)
    const menu = useSelectorGetMenu(state)
    const drinks = useSelectorGetDrinks(state)
    fetchMenu()

    return (
        <>
            <Header />
            <AppBar />
            <img className={style.banner} src={MenuBannerJpg}></img>
            <section data-testid="Menu" className={style.menu}>
                <SearchInput />
                <div>
                    <section data-testid="menuSection">
                        <h1 className={style.sectionTitle}>Cardápio</h1>
                        <ul data-testid="menuList">
                            {!menu.length
                                ? 'carregando...'
                                : menu.map((category) => {
                                      const { id, description, products } =
                                          category
                                      return (
                                          <Category
                                              key={id}
                                              title={description}
                                              products={products}
                                          />
                                      )
                                  })}
                        </ul>
                    </section>
                    <section data-testid="drinkSection">
                        <h1 className={style.sectionTitle}>Bebidas</h1>
                        <ul data-testid="drinkList">
                            {!drinks ? (
                                'carregando'
                            ) : (
                                <Category products={drinks.products} />
                            )}
                        </ul>
                    </section>
                </div>
            </section>
        </>
    )
}
