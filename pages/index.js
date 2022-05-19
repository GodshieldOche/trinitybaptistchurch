import Home from "../components/Home";
import Head from "next/head";
import { wrapper } from "../redux/Store";
import { getClientLatest } from "../redux/features/client/latest";


export default function HomePage() {
  return (
    <div >
      <Head>
        <title>Trinity Baptist Church</title>
      </Head>
      <Home/>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, query }) => {
  await store.dispatch(getClientLatest({ req }))
})