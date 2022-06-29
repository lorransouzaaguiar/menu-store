//@ts-nocheck
import React, { useReducer } from 'react'

import CategoryList from '../components/CategoryList'
import { menuReducer, menuState } from '../store/menu-reducer'
import { useFetchCategories } from '../store/async-dispatchs'

export default function Menu() {
    const [state, dispatch] = useReducer(menuReducer, menuState)
    useFetchCategories({ dispatch, type: 'populate_menu' })

    return (
        <section data-testid="Menu">
            <span>Informações uteis do admin</span>
            <img src="https://classic.exame.com/wp-content/uploads/2017/05/sushi.jpg?quality=70&strip=info&w=1024"></img>
            <div className="search-input">
                <input type="text" />
                <img src="icone de lupa" />
            </div>
            <div>
                <section data-testid="menuSection">
                    <h1>Cardapio</h1>
                    <ul data-testid="menuList">
                        {state.menuCategories.map((section) => {
                            const { description, products } = section
                            return (
                                <CategoryList
                                    title={description}
                                    products={products}
                                />
                            )
                        })}
                    </ul>
                </section>
                <section data-testid="drinkSection">
                    <h1>Bebidas</h1>
                    <ul data-testid="drinkList">
                        {state.drinkCategories.map((section) => {
                            const { description, products } = section
                            return (
                                <CategoryList
                                    title={description}
                                    products={products}
                                />
                            )
                        })}
                    </ul>
                </section>
            </div>
        </section>
    )
}
