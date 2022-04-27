import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import Events from "../../../../components/Dashboard/events/Events";
import Services from "../../../../components/Dashboard/events/services/Services";


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <Events>
                    <Services />
                </Events>
            </DashboardLayout>
        </div>
    )
}
