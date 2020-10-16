import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

const PageLayout = ({ children, pageTitle }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle} page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default PageLayout
