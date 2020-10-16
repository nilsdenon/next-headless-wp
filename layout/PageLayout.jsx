import Head from 'next/head'
import Header from '../components/Header'
import { Main } from '../components/Layout'

const PageLayout = ({ children, title, menu, isHome }) => {
  return (
    <>
      <Head>
        <title>{title} page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menu={menu} />
      <Main>
        {!isHome && <h1>{title}</h1>}
        {children}
      </Main>
    </>
  )
}

export default PageLayout
