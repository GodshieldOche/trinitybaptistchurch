import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import Emails from "../../../../components/Dashboard/register/emails/Emails";
import Register from "../../../../components/Dashboard/register/Register";


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
