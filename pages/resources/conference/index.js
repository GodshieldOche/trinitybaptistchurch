import Head from "next/head";
import Conference from "../../../components/conference/Conference";
import { getClientConferences } from "../../../redux/features/client/conferences";
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
    await store.dispatch(getClientConferences({ req }))
})