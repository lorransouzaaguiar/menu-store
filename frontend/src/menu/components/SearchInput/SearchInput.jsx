import style from './SearchInput.module.css'
import SearchIcon from '@App/assets/search-input.svg'

export default function SearchInput() {
    return (
        <div className={style.container}>
            <input
                className={style.input}
                placeholder="Procurar no cardápio..."
                type="text"
            />
            <img className={style.icon} src={SearchIcon} />
        </div>
    )
}
