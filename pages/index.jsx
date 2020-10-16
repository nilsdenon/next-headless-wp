import Link from 'next/link'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
// data
import { getPrimaryMenu, getAllPosts } from '../lib/api'

export default function Home({ allPosts: { edges }, menuData }) {
  const primaryMenu = menuData.edges[0].node.menuItems.edges

  return (
    <Layout isHome title="Natalie Kriwy Photographer" menu={primaryMenu}>
      {edges.map(({ node }) => (
        <div key={node.id}>
          <div>
            <figure>
              <img
                src={node.extraPostInfo.thumbImage.mediaItemUrl}
                alt={node.title}
              />
            </figure>
          </div>
          <div>
            <h2>{node.title}</h2>
            <p>{node.extraPostInfo.authorExcerpt}</p>
            <Link href={`/blog/${node.slug}`}>
              <a>Read more {'>'}</a>
            </Link>
          </div>
        </div>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const menuData = await getPrimaryMenu()
  const allPosts = await getAllPosts()

  return {
    props: {
      allPosts,
      menuData,
    },
  }
}
