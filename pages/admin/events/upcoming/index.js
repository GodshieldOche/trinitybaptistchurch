import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import Events from "../../../../components/Dashboard/events/Events";
import Upcoming from "../../../../components/Dashboard/events/upcoming/Upcoming";
import { getSession } from 'next-auth/react'


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <Events>
                    <Upcoming />
                </Events>
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
