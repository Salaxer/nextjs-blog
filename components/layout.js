import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'SALAXER'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home, img, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio | Salaxer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Personal website using Next.js"
        />
        <meta
          property="og:image"
          content="https://salaxer.com/logo512.png"/>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src={img ? img : "/images/profile.png"}
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src={img ? img : "/images/profile.png"}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            {title ?
            <h2 className={utilStyles.headingLg}>
                {title}
            </h2> : <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>}
            
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>??? Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}