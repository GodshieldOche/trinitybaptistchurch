import Head from "next/head";
import DashboardLayout from "../../../components/Dashboard/DashboardLayout";
import Ministers from "../../../components/Dashboard/ministers/Ministers";


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <Ministers />
            </DashboardLayout>
        </div>
    )
}
