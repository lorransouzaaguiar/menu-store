import AppBar from '@App/components/AppBar/AppBar'
import Header from '@App/components/Header/Header'
import SectionItem from '@Cart/components/SectionItem/SectionItem'
import style from './SignUpAdressPage.module.css'
import MapSvg from '@App/assets/maps.svg'
import CartButton from '@Cart/components/CartButton/CartButton'

export default function SignUpAdressPage() {
    return (
        <>
            <Header />
            <AppBar />
            <section className={style.container}>
                <SectionItem title="Cadastro de Endereço" />
                <img className={style.image} src={MapSvg} />
                {/*  <div className={style.imageContainer}>
                </div> */}
                <form className={style.form}>
                    <div className={style.sameLine}>
                        <div
                            className={style.block}
                            style={{ minWidth: '238px' }}
                        >
                            <label>CEP</label>
                            <input type="text" placeholder="Ex: xxxxx-xxxx" />
                        </div>
                        <div
                            className={style.block}
                            style={{ minWidth: '82px' }}
                        >
                            <label>Nº</label>
                            <input type="text" placeholder="Ex: 89" />
                        </div>
                    </div>
                    <div className={style.block}>
                        <label>Rua</label>
                        <input
                            type="text"
                            placeholder="Ex: Rua João da Cunha"
                        />
                    </div>
                    <div className={style.sameLine}>
                        <div className={style.block}>
                            <label>CEP</label>
                            <input type="text" placeholder="Ex: xxxxx-xxxx" />
                        </div>
                        <div className={style.block}>
                            <label>Nº</label>
                            <input type="text" placeholder="Ex: 89" />
                        </div>
                    </div>
                    <div className={style.block}>
                        <label>Cidade</label>
                        <input type="text" placeholder="Ex: Nova Brasilia" />
                    </div>
                </form>
                <CartButton title="Cadastrar" to="/delivery" />
            </section>
        </>
    )
}
