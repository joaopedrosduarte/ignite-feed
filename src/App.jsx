import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Post from './Post';
import styles from './styles/App.module.css'
import './styles/global.css'

function App() {
    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    <Post 
                        author='João Pedro Duarte de Souza'
                        content='Professor de ReactJS especialiado na Rocketseat'
                    />
                    <Post 
                        author='Diego Fernandes'
                        content='Professor da RocketSeat'
                    />
                </main>
            </div>
        </div>
    )
}

export default App
