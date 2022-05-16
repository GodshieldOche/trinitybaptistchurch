import Head from "next/head";
import Details from "../../../components/conference/Details";
import { getClientConferenceDetails } from "../../../redux/features/client/conference";
import { wrapper } from "../../../redux/Store";

export default function SermonPage() {
    return (
        <div >
            <Head>
                <title>TBC | Conference Messages</title>
            </Head>
            <Details />
        </div>
    )
}


export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, params }) => {
    const id = params.id
    await store.dispatch(getClientConferenceDetails({ req, id }))
})