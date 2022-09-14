import Head from 'next/head'
import Image from 'next/image'
import styles from '/src/styles/Home.module.css'

import Book from '/src/components/Book'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yet another website</title>
        <meta name="description" content="Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Book />      
      </main>
      <footer className={styles.footer}>
        Placeholder placeholder.
      </footer>
    </div>
  )
}
