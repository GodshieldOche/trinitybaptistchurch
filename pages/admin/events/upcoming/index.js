import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import Events from "../../../../components/Dashboard/events/Events";
import Upcoming from "../../../../components/Dashboard/events/upcoming/Upcoming";


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
