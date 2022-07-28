import AppBar from '@App/components/AppBar/AppBar'
import Header from '@App/components/Header/Header'
import SearchInput from '@Menu/components/SearchInput/SearchInput'
import ProductList from '@Menu/components/ProductList/ProductList'
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
