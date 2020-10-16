import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Main } from '../components/Layout'

const HomeLayout = ({ children, title, menu }) => {
  return (
    <>
      <Head>
        <title>{title} | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header menu={menu} />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default HomeLayout
