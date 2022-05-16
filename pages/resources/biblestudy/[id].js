import Head from "next/head";
import Details from "../../../components/biblestudy/Details";
import { getClientBibleStudyDetails } from "../../../redux/features/client/bibleStudy";
import { wrapper } from "../../../redux/Store";

export default function BibleStudyPage() {
    return (
        <div >
            <Head>
                <title>TBC | Preaching Series</title>
            </Head>
            <Details />
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, params }) => {
    const id = params.id
    await store.dispatch(getClientBibleStudyDetails({ req, id }))
})