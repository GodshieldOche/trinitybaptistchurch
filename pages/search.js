import Head from "next/head";
import Search from "../components/Search/Search";


export default function HomePage() {
  return (
    <div >
      <Head>
        <title>Search Resources</title>
      </Head>
      <Search/>
    </div>
  )
}
