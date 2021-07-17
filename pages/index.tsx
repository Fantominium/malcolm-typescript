import Layout from '../components/Layout'
import LinkAtom from "../components/atoms/LinksAtom"

const IndexPage = () => (
  <Layout title="Home ">
    <h1>Hello Next.js 👋</h1>
    <p>
    <LinkAtom label="About Me" href="/about"/>
      {/* <Link href="/about">
        <a>About</a>
      </Link> */}
    </p>
  </Layout>
)

export default IndexPage
