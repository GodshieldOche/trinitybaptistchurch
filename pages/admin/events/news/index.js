import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import Events from "../../../../components/Dashboard/events/Events";
import News from "../../../../components/Dashboard/events/news/News";


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <Events>
                    <News />
                </Events>
            </DashboardLayout>
        </div>
    )
}
