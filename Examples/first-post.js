import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../components/layout'

export default function FirstPost() {
  return (
    <Layout>
        {/* Head, native from next, it allow modify all data in the header tag from HTML */}
      <Head>
        <title>First Post</title>
        {/* Script, allow performance to add Scripts like facebook */}
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}