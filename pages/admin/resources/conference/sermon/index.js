import Head from "next/head";
import DashboardLayout from "../../../../../components/Dashboard/DashboardLayout";
import New from "../../../../../components/Dashboard/resources/sermon/New";


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <New name={"conference sermon"} />
            </DashboardLayout>
        </div>
    )
}