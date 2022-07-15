//@ts-nocheck
import React, { useEffect, useReducer } from 'react'
import { menuReducer, menuState } from '@Menu/store/menu-reducer.js'
import { useFetchCategories } from '@Menu/store/async-actions'
import style from './MenuPage.module.css'
import SearchInput from '@App/components/SearchInput/SearchInput'
import Category from '@Menu/components/Category/Category'
import Header from '@App/components/Header/Header'
import AppBar from '@App/components/AppBar/AppBar'
import MenuBannerJpg from '@App/assets/banner-cardapio.jpg'

export default function MenuPage() {
    const [state, dispatch] = useReducer(menuReducer, menuState)
    useFetchCategories(dispatch, { type: 'FETCH_CATEGORIES' })

    return (
        <>
            <Header />
            <AppBar />
            <section data-testid="Menu" className={style.menu}>
                <img className={style.banner} src={MenuBannerJpg}></img>
                <div className={style.menuBody}>
                    <SearchInput />
                    <div>
                        <section data-testid="menuSection">
                            <h1 className={style.menuSectionTitle}>Cardápio</h1>
                            <ul data-testid="menuList">
                                {!state.menu.length
                                    ? 'carregando...'
                                    : state.menu.map((category) => {
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
                            <h1 className={style.menuSectionTitle}>Bebidas</h1>
                            <ul data-testid="drinkList">
                                {!Object.keys(state.drinks).length ? (
                                    'carregando'
                                ) : (
                                    <Category
                                        products={state.drinks.products}
                                    />
                                )}
                            </ul>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}
