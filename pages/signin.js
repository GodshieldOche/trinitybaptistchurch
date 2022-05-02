import Layout from "../components/layout/Layout";
import { getSession } from 'next-auth/react'
import SignIn from "../components/auth/SignIn";


export default function SignInPage() {
    return (
        <SignIn />
    )
}


export async function getServerSideProps(context) {
    const { req } = context
    const session = await getSession({ req })

    if (session) {
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