import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import New from "../../../../components/Dashboard/events/news/New";


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <New />
            </DashboardLayout>
        </div>
    )
}
