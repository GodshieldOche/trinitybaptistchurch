import { getSession } from 'next-auth/react'
import SignUp from "../components/auth/SignUp";


export default function SignInPage() {
    return (
        <SignUp />
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