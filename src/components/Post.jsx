import styles from '../styles/Post.module.css'
import Comment from './Comment'
import Avatar from './Avatar';

export default function Post(props) {
    return (
        <div className={styles.post}>
            <header>
                <div className={styles.profile}>
                    <Avatar src="https://avatars.githubusercontent.com/u/37224220?v=4" />
                    <div>
                        <strong>Maia</strong>
                        <span>Python Dev</span>
                    </div>
                </div>
                <time title='11 de Maio ás 11:13h' dateTime='2022-05-11 08:30:27'>Publicado ha 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento </p>da Rocketseat. O nome do projeto é DoctorCare 🚀
                <p><a href='#'>jane.design/doctorcare </a></p>
                <p>
                    <a href='#'>#novoprojeto</a>{' '}
                    <a href='#'>#nlw</a>{' '}
                    <a href='#'>#rocketseat</a>
                </p>
            </div>
            <form className={styles.forms}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentario'></textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <Comment />
        </div>
    )
}