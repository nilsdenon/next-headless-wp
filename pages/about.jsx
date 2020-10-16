import Layout from '../components/Layout'
import { getPrimaryMenu } from '../lib/api'

const About = ({ menuData }) => {
  const primaryMenu = menuData.edges[0].node.menuItems.edges
  return (
    <Layout title="About" menu={primaryMenu}>
      blabla
    </Layout>
  )
}

export default About

export async function getStaticProps() {
  const menuData = await getPrimaryMenu()

  return {
    props: {
      menuData,
    },
  }
}
