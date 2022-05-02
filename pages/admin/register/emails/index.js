import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import Emails from "../../../../components/Dashboard/register/emails/Emails";
import Register from "../../../../components/Dashboard/register/Register";
import { getSession } from 'next-auth/react'


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <Register>
                    <Emails />
                </Register>
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
