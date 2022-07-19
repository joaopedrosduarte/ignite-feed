import styles from '../styles/Comment.module.css'
import { Trash, ThumbsUp } from 'phosphor-react'
import Avatar from './Avatar';

export default function Comment() {
    return (
        <div className={styles.comment}>
                <Avatar hasBorder={false} src="http://github.com/joaopedrosduarte.png" alt="" />
                <div className={styles.geralContent}>
                    <div className={styles.content}>
                        <div className={styles.status}>
                            <div className={styles.nameStatus}>
                                <strong>Devon Lane</strong>
                                <span>{' '}{'(voce)'}</span>
                            </div>
                            <button title='Deletar comentario'>
                                <Trash size={24}  weight='bold'/>
                            </button>
                        </div>
                        <time>Cerca de 2h</time>
                        <p>Muito bom Devon!!</p>
                    </div>
                    <footer className={styles.feedback}>
                        <button>
                            <ThumbsUp size={20} weight='bold'/>
                            Aplaudir<span>03</span>
                        </button>
                    </footer>
                </div>
        </div>
    )
}