import Head from "next/head";
import Resources from "../components/resources/Resources";


export default function HomePage() {
    return (
        <div >
            <Head>
                <title>Resources</title>
            </Head>
            <Resources />
        </div>
    )
}
