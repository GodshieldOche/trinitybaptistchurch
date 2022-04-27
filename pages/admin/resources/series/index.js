import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import Resources from "../../../../components/Dashboard/resources/Resources";
import Series from "../../../../components/Dashboard/resources/series/Series";


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <Resources>
                    <Series />
                </Resources>
            </DashboardLayout>
        </div>
    )
}
