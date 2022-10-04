import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Header } from '../components/header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Austin Baird</title>
        <meta
          name="description"
          content="A Portfolio Website Created by Austin Baird"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <h1 className={styles.h1}>
          Austin Baird Portfolio Website (Under Construction)
        </h1>
      </main>
    </div>
  )
}
