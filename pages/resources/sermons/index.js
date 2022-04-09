import Head from "next/head";
import Sermons from "../../../components/sermons/Sermons";


export default function SermonPage() {
    return (
        <div >
            <Head>
                <title>TBC || Sermons</title>
            </Head>
            <Sermons />
        </div>
    )
}
