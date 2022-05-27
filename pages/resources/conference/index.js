import Head from "next/head";
import Conference from "../../../components/conference/Conference";
import { getClientConferences, getConferenceFilters } from "../../../redux/features/client/conferences";
import { wrapper } from "../../../redux/Store";


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


export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, query }) => {
    const { topic, preacher, page, scripture } = query
    await store.dispatch(getClientConferences({ req, topic, preacher, page, scripture  }))
    await store.dispatch(getConferenceFilters({ req }))
})