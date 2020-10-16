import Head from 'next/head'
import Header from '../components/Header'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Main = styled.main`
  flex: 1;
`

const Footer = styled.footer`
  height: 100px;
`

const PageLayout = ({ children, title }) => {
  return (
    <Container>
      <Head>
        <title>{title} page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        <h1>{title}</h1>
        {children}
      </Main>
      <Footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          @damienpierre
        </a>
      </Footer>
    </Container>
  )
}

export default PageLayout
