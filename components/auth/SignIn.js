import Link from "next/link"
import { useState } from "react"
import { signIn } from 'next-auth/react'


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setLoading(true)

        const result = await signIn('credentials', {
            redirect: false,
            email,
            password
        })


        setLoading(false)


        console.log(result)
        if (result.error) {
            console.log(result.error)
        } else {
            window.location.href = '/'
        }
    }


    return (
        <div className="flex justify-center items-center w-full bg-gray-800 h-screen">
            <form onSubmit={handleSubmit}
                className="relative max-w-screen-sm mx-auto rounded-xl flex flex-col space-y-5 w-full bg-white !mt-10 h-[450px] p-5 ">
                <h1 className="uppercase font-medium text-center">Sign In</h1>
                <div className="space-y-2 px-5 !mt-10">
                    <label htmlFor="title" className="ml-2 text-sm uppercase">Email</label>
                    <input
                        type="title"
                        name="title"
                        className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                        required
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className="space-y-2 px-5">
                    <label htmlFor="password" className="ml-2 text-sm uppercase">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                        required
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <div className="absolute bottom-4 left-0 right-0 justify-center flex w-full items-center space-x-5 ">
                    <button className="uppercase text-sm  text-white bg-primary-light px-5 rounded-full py-1">
                        {loading ? "loading..." : "SIGN IN"}
                    </button>
                    <h1 className="text-sm capitalize cursor-pointer">Or signup</h1>
                </div>
            </form>
        </div>
    )
}

export default SignIn
