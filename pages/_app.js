import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import { wrapper } from '../redux/Store'
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextNprogress color="#f97316" />
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
