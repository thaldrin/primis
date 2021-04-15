import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Thaldrin">
    <h1>Welcome to Thaldrin's new Site</h1>
    <h2>
      This is currently in-dev to invite the bot please use <Link href="/invite">
        <a>thaldr.in/invite</a>
      </Link>{' '}
    </h2>
  </Layout>
)

export default IndexPage
