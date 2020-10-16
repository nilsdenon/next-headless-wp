import Link from 'next/link'

import { getPrimaryMenu } from '../lib/api'

export default function Header({ menuData: { edges } }) {
  const primaryMenu = edges[0].node.menuItems.edges
  return (
    <header>
      <nav>
        {primaryMenu.map((item) => (
          <Link key={item.node.id} href={item.node.path}>
            <a>{item.node.label}</a>
          </Link>
        ))}
      </nav>
    </header>
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
