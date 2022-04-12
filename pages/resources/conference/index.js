import Head from "next/head";
import Conference from "../../../components/conference/Conference";


export default function ConferencePage() {
    return (
        <div >
            <Head>
                <title>TBC | Conference Messages</title>
            </Head>
            <Conference />
        </div>
    )
}
