import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yet another website</title>
        <meta name="description" content="Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>Nothing to show atm!</p>
      </main>
      <footer className={styles.footer}>
        Placeholder placeholder.
      </footer>
    </div>
  )
}
