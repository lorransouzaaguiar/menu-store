import AppBar from '@App/components/AppBar/AppBar.js'
import Header from '@App/components/Header/Header.js'
import SearchInput from '@App/components/SearchInput/SearchInput.js'
import ProductList from '@Menu/components/ProductList/ProductList.js'
import { categoryRepository } from '@Menu/repository/category-repository'
import { useFetchCategories } from '@Menu/store/async-actions.js'
import { menuReducer, menuState } from '@Menu/store/menu-reducer.js'
import { useEffect, useReducer, useState } from 'react'
import style from './OnSalePage.module.css'

export default function OnSalePage() {
    const [state, dispatch] = useReducer(menuReducer, menuState)
    useFetchCategories(dispatch, { type: 'FETCH_CATEGORIES' })

    return (
        <>
            <Header />
            <AppBar />
            <section className={style.onSale}>
                <SearchInput />
                {!Object.keys(state.onSale).length ? (
                    'carregando...'
                ) : (
                    <div className={style.list}>
                        <ProductList products={state.onSale.products} />
                    </div>
                )}
            </section>
        </>
    )
}
