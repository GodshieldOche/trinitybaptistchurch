import Head from "next/head";
import Sermon from "../../../components/sermons/Sermon";
import Sermons from "../../../components/sermons/Sermons";


export default function SermonPage() {
    return (
        <div >
            <Head>
                <title>TBC | Sermon</title>
            </Head>
            <Sermon />
        </div>
    )
}
