import Head from 'next/head'
import styled from 'styled-components'
import { BaseMetrics, dimensions } from '../theme/default'
import Header from './Header'
import Footer from './Footer'

export const Main = styled.main`
  ${BaseMetrics}
  flex: 1;
  flex-direction: column;
  max-width: ${dimensions.container.large};
  width: 100%;
`
const Layout = ({ children, title, menu, isHome }) => {
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
      <Footer />
    </>
  )
}

export default Layout
