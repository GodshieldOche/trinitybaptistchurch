import Head from "next/head";
import DashboardLayout from "../../../../../components/Dashboard/DashboardLayout";
import { getSession } from 'next-auth/react'
import Adder from "../../../../../components/Dashboard/resources/conference/Adder";


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <Adder name={"conference sermon Details"} />
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
