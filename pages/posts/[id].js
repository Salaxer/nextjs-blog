import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head';
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

// Obtain the statics phats from the file on posts/***.md and assign to the props
export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths, 
        fallback: false
    }
}

// obtain the path of the url;; in this case will be [id] and return the props for the component Post
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

