import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import Resources from "../../../../components/Dashboard/resources/Resources";
import List from "../../../../components/Dashboard/resources/sermon/List";


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <Resources>
                    <List />
                </Resources>
            </DashboardLayout>
        </div>
    )
}
