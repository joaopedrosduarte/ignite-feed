import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' />
            <img src='' />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/91631618?v=4" />
                <strong>João Pedro</strong>
                <span>Web dev</span>
            </div>
            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </div>
    );
}