import Head from "next/head";
import Details from "../../components/Events/Details";
import { getClientEventDetails } from "../../redux/features/client/event";
import { wrapper } from "../../redux/Store";

export default function EventDetailsPage() {
    return (
        <div >
            <Head>
                <title>TBC | Event Details</title>
            </Head>
            <Details />
        </div>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req, params }) => {
    const id = params.id
    await store.dispatch(getClientEventDetails({ req, id }))
})