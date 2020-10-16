import Link from 'next/link'
import PageLayout from '../layout/PageLayout'

// data
import { getPrimaryMenu } from '../lib/api'

export default function Home({ menuData: { edges } }) {
  const primaryMenu = edges[0].node.menuItems.edges

  return (
    <PageLayout title="Home">
      <nav>
        {primaryMenu.map((item) => (
          <Link key={item.node.id} href={item.node.path}>
            <a>{item.node.label}</a>
          </Link>
        ))}
      </nav>

      <h1>Welcome to our demo blog!</h1>
      <p>
        You can find more articles on the{' '}
        <Link href="/blog">
          <a>blog articles page</a>
        </Link>
      </p>
    </PageLayout>
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
