import Head from "next/head";
import Dashboard from "../../components/Dashboard/Dashboard";


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <Dashboard />
        </div>
    )
}
