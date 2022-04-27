import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import BibleStudy from "../../../../components/Dashboard/resources/biblestudy/BibleStudy";
import Resources from "../../../../components/Dashboard/resources/Resources";


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <Resources>
                    <BibleStudy />
                </Resources>
            </DashboardLayout>
        </div>
    )
}
