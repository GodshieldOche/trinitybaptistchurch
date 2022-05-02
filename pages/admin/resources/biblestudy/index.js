import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import BibleStudy from "../../../../components/Dashboard/resources/biblestudy/BibleStudy";
import Resources from "../../../../components/Dashboard/resources/Resources";
import { getSession } from 'next-auth/react'

export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <Resources>
                    <BibleStudy />
                </Resources>
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
