import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import ProfilePic from "../components/atoms/ProfilePic";
import Header from "./organisms/Header"

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* I want to replace header with my own molecule */}
    {/* <header>
      <nav>
        <Link href="/">
          <a><ProfilePic url="/images/profile.jpg" alt="profile pic"/></a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a>
      </nav>
    </header> */}
    <Header/>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
