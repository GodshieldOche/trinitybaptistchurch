import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import Conference from "../../../../components/Dashboard/resources/conference/Conference";
import Resources from "../../../../components/Dashboard/resources/Resources";


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <Resources>
                    <Conference />
                </Resources>
            </DashboardLayout>
        </div>
    )
}
