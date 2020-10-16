import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

// data
import { getPrimaryMenu } from '../lib/api'

export default function Home({ menuData: { edges } }) {
  const primaryMenu = edges[0].node.menuItems.edges

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav>
          {primaryMenu.map((item) => (
            <Link key={item.node.id} href={item.node.path}>
              <a>{item.node.label}</a>
            </Link>
          ))}
        </nav>

        <h1 className={styles.title}>Welcome to our demo blog!</h1>
        <p>
          You can find more articles on the{' '}
          <Link href="/blog">
            <a>blog articles page</a>
          </Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const menuData = await getPrimaryMenu()

  return {
    props: {
      menuData,
    },
  }
}
