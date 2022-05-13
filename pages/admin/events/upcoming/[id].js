import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import { getSession } from 'next-auth/react'
import Details from "../../../../components/Dashboard/events/upcoming/Details";


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <Details />
            </DashboardLayout>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { req } = context
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {}
    }
}
