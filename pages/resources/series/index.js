import Head from "next/head";
import Series from "../../../components/series/Series";
import Sermons from "../../../components/sermons/Sermons";


export default function SeriesPage() {
    return (
        <div >
            <Head>
                <title>TBC || Preaching Series</title>
            </Head>
            <Series />
        </div>
    )
}
