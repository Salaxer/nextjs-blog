import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head';
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

// Obtain the statics phats from the file on posts/***.md and assign to the props
export async function getStaticPaths() {
    console.error('ssss');
    const paths = getAllPostIds()
    console.log('Obtain the statics pats from the url and assign to the props',paths);
    return {
        paths, 
        fallback: false
    }
}

// obtain the path of the url;; in this case will be [id] and return the props for the component Post
export async function getStaticProps({ params }) {
    console.log("here the last one result::: ",params);
    const postData = await getPostData(params.id)
    console.log("obtian the static props and return anoter one === ",postData);
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

