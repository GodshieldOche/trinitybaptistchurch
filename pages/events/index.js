import Head from "next/head";
import Events from "../../components/Events/Events";


export default function EventsPage() {
    return (
        <div >
            <Head>
                <title>TBC || Events</title>
            </Head>
            <Events />
        </div>
    )
}
