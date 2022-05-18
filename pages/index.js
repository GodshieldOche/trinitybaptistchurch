import Home from "../components/Home";
import Head from "next/head";
// import { wrapper } from "../redux/Store";
// import { loadUser } from "../redux/features/currentUser";


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
