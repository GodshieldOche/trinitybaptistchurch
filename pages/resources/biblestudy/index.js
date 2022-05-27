import Head from "next/head";
import Biblestudy from "../../../components/biblestudy/Biblestudy";
import { getBibleStudyFilters, getClientBibleStudies } from "../../../redux/features/client/bibleStudies";
import { wrapper } from "../../../redux/Store";

export default function ConferencePage() {
    return (
        <div >
            <Head>
                <title>TBC | Bible Study</title>
            </Head>
            <Biblestudy />
        </div>
    )
}


export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, query }) => {
    const { topic, preacher, page, scripture } = query
    await store.dispatch(getClientBibleStudies({ req, topic, page, preacher, scripture }))
    await store.dispatch(getBibleStudyFilters({ req }))
})