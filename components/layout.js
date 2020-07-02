import Head from 'next/head'
import Link from 'next/link'
import Topbar from './topbar'
import Footer from './footer'
import config from 'config'
import s from './layout.module.scss'

const { title, description } = config

export default function Layout({ children, home }) {
  return (
    <div className={s.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={description} />
      </Head>
      <div className={s.topbar}>
        <Topbar home={home} />
      </div>

      <div className={s.main}>{children}</div>

      <div className={s.bottom}>
        {!home && (
          <Link href="/">
            <a>← Back</a>
          </Link>
        )}
      </div>
      <Footer />
    </div>
  )
}
