import React from 'react'
import { LangPicker } from './langPicker/langPicker'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.langPicker}>
        <LangPicker />
      </div>
      <div className={styles.sideMenu}>Side Menu</div>
    </header>
  )
}

export { Header }
