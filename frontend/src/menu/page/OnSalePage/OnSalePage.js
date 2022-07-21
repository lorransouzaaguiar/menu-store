import AppBar from '@App/components/AppBar/AppBar.js'
import Header from '@App/components/Header/Header.js'
import SearchInput from '@Menu/components/SearchInput/SearchInput.js'
import ProductList from '@Menu/components/ProductList/ProductList.js'
import { useContext } from 'react'
import style from './OnSalePage.module.css'
import { MenuContext } from '@Menu/context/menu-context'
import { useSelectorGetOnSale } from '@Menu/store/selectors'

export default function OnSalePage() {
    const { state } = useContext(MenuContext)
    const onSale = useSelectorGetOnSale(state)

    return (
        <>
            <Header />
            <AppBar />
            <section className={style.onSale}>
                <SearchInput />
                {!onSale ? (
                    'carregando...'
                ) : (
                    <div className={style.list}>
                        <ProductList products={onSale.products} />
                    </div>
                )}
            </section>
        </>
    )
}
