import Link from 'next/link'
import Layout from '../../components/Layout'
// data
import { getAllPosts } from '../../lib/api'

const Blog = ({ allPosts: { edges } }) => (
  <Layout title="Blog Page">
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

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: {
      allPosts,
    },
  }
}

export default Blog
