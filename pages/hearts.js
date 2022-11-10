/* eslint-disable @next/next/next-script-for-ga */
// Next + Other
import Head from 'next/head'

// Components

import Heart from '/src/components/Heart'

// Styles
import styles from '/src/styles/Home.module.css'

const HeartsPage = () => {
  return (
    <>
    <div className={styles.container}>
      
      <Head>
        <title>Hearts!</title>
        <meta name="description" content="Welcome to this website" />
        <link rel="icon" href="/favicon.ico" />
        <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KKF7ZXT')
                `,
            }}
          />
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KKF7ZXT"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
      <main className={styles.main}>
        {Array.from({ length: 50 }, (_, i) => <span key={i} style={{height: '80px'}}><Heart/></span>)}
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
   </>
  )
}

export default HeartsPage