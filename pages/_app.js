import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import { wrapper } from '../redux/Store'
import 'react-quill/dist/quill.snow.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
