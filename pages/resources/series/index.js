import Head from "next/head";
import Series from "../../../components/series/Series";
import Sermons from "../../../components/sermons/Sermons";
import { getClientSeries } from "../../../redux/features/client/series";
import { wrapper } from "../../../redux/Store";


export default function SeriesPage() {
    return (
        <div >
            <Head>
                <title>TBC | Preaching Series</title>
            </Head>
            <Series />
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, query }) => {
    await store.dispatch(getClientSeries({ req }))
})
