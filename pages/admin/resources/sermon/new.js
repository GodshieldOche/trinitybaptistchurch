import Head from "next/head";
import DashboardLayout from "../../../../components/Dashboard/DashboardLayout";
import New from "../../../../components/Dashboard/resources/sermon/New";
import { getSession } from 'next-auth/react'


export default function AdminDashboard() {
    return (
        <div>
            <Head>
                <title>TBC || Admin Dashboard</title>
            </Head>
            <DashboardLayout>
                <New name={"sermon"} />
            </DashboardLayout>
        </div>
    )
}


export async function getServerSideProps(context) {
    const { req } = context
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    return {
        props: {}
    }
}




// import { useState } from 'react';
// import { useS3Upload } from 'next-s3-upload';

// export default function Home() {
//     let [imageUrl, setImageUrl] = useState();
//     let { FileInput, openFileDialog, files, uploadToS3 } = useS3Upload();

//     let handleFileChange = async file => {
//         let { url } = await uploadToS3(file);
//         setImageUrl(url);
//     };

//     return (
//         <div>
//             <FileInput onChange={handleFileChange} />

//             <button onClick={openFileDialog}>Upload file</button>

//             <div className="pt-8">
//                 {files.map((file, index) => (
//                     <div key={index}>
//                         File #{index} progress: {file.progress}%
//                     </div>
//                 ))}
//             </div>
//             <h1>{imageUrl}</h1>

//         </div>
//     );
// }
