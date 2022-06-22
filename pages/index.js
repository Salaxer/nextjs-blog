import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a Software Developer and currently on certification process of Mechatronics engineering from Mexico with a passion for building digital and physical services/stuff. I always find the way to solving real-life problems with code and my mind. I want collaborate with teams passionate to created innovative products.
        I am improving day by day because I've never stopped learning.</p>
      </section>
      <section>
        <h2 className={utilStyles.headingMd}>Using Api with Static Generation</h2>
        <p>
          <Link href="/products/1" >Here</Link> You can see a list of Products.
          <br/>
          (from <a href="https://fakestoreapi.com/products/" target="_blank" rel="noopener noreferrer">the FakeStore API</a>)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}