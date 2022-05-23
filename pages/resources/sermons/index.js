import Head from "next/head";
import Sermons from "../../../components/sermons/Sermons";
import { getClientSermons, getSermonFilters } from "../../../redux/features/client/sermons";
import { wrapper } from "../../../redux/Store";


export default function SermonPage() {
    return (
        <div >
            <Head>
                <title>TBC | Sermons</title>
            </Head>
            <Sermons />
        </div>
    )
}


export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, query }) => {
    const { topic, preacher, scripture} = query
    await store.dispatch(getClientSermons({req,  topic, preacher, scripture}))
    await store.dispatch(getSermonFilters({req}))
})