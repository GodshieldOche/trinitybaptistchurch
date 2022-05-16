import Head from "next/head";
import Sermon from "../../../components/sermons/Sermon";
import { getClientSermonDetails } from "../../../redux/features/client/sermon";
import { wrapper } from "../../../redux/Store";


export default function SermonPage() {
    return (
        <div >
            <Head>
                <title>TBC | Sermon</title>
            </Head>
            <Sermon />
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, params }) => {
    const id = params.id
    await store.dispatch(getClientSermonDetails({ req, id }))
})
