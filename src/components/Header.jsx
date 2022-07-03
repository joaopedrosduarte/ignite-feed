import styles from '../styles/Header.module.css'
import logo from '../assets/Ignite-logo.svg'

export default function Header(){
    return(
        <div className={styles.header}>
            <img src={logo} />
            <strong>Ignite Feed</strong>
        </div>
    )
}