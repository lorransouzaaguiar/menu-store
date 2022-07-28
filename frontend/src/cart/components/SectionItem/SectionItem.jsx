import style from './SectionItem.module.css'

export default function SectionItem(props) {
    return (
        <div className={style.title}>
            <h1>{props.title}</h1>
        </div>
    )
}
