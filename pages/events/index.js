import Head from "next/head";
import Events from "../../components/Events/Events";
import { getClientEvents } from "../../redux/features/client/events";
import { wrapper } from "../../redux/Store";


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


export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, query }) => {
    await store.dispatch(getClientEvents({ req }))
})