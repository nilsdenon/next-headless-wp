import { useRouter } from 'next/router'
import PageLayout from '../../layout/PageLayout'
import Link from 'next/link'

// data
import { getAllPostsWithSlug, getPost } from '../../lib/api'

export default function Post({ postData }) {
  const router = useRouter()

  if (!router.isFallback && !postData?.slug) {
    return <p>hmm...looks like an error!</p>
  }

  const formatDate = (date) => {
    const newDate = new Date(date)

    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`
  }

  return (
    <PageLayout title={postData.title}>
      {router.isFallback ? (
        <h2>...loading</h2>
      ) : (
        <article>
          <div>
            <p>{formatDate(postData.date)}</p>
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </article>
      )}
      <p>
        <Link href="/blog">
          <a>back to articles</a>
        </Link>
      </p>
    </PageLayout>
  )
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const data = await getPost(params.slug)

  return {
    props: {
      postData: data.post,
    },
  }
}
