import Link from 'next/link'
import PageLayout from '../../layout/PageLayout'
// data
import { getAllPosts } from '../../lib/api'

// styles
import blogStyles from '../../styles/Blog.module.css'

export const Blog = ({ allPosts: { edges } }) => (
  <PageLayout>
    {edges.map(({ node }) => (
      <div className={blogStyles.listitem} key={node.id}>
        <div className={blogStyles.listitem__thumbnail}>
          <figure>
            <img
              src={node.extraPostInfo.thumbImage.mediaItemUrl}
              alt={node.title}
            />
          </figure>
        </div>
        <div className={blogStyles.listitem__content}>
          <h2>{node.title}</h2>
          <p>{node.extraPostInfo.authorExcerpt}</p>
          <Link href={`/blog/${node.slug}`}>
            <a>Read more {'>'}</a>
          </Link>
        </div>
      </div>
    ))}
  </PageLayout>
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
