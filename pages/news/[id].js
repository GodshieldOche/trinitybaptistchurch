import Head from "next/head";
import NewsDetails from "../../components/Events/NewsDetails";
import { getClientNewsDetails } from "../../redux/features/client/event";
import { wrapper } from "../../redux/Store";

export default function EventDetailsPage() {
    return (
        <div >
            <Head>
                <title>TBC | Event Details</title>
            </Head>
            <NewsDetails />
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, params }) => {
    const id = params.id
    await store.dispatch(getClientNewsDetails({ req, id }))
})