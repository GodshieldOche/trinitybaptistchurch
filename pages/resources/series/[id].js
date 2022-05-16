import Head from "next/head";
import Details from "../../../components/series/Details";
import { getClientSeriesDetails } from "../../../redux/features/client/seriesDetails";
import { wrapper } from "../../../redux/Store";

export default function SermonPage() {
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
    await store.dispatch(getClientSeriesDetails({ req, id }))
})