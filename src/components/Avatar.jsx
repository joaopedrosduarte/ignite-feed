import styles from '../styles/Avatar.module.css'

export default function Avatar({ hasBorder = true, src}) {
    return (
        <img className={hasBorder ? styles.avatarHasBorder : styles.avatar } src={src} />
    )
}