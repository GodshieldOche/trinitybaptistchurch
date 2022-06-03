import Link from "next/link"
import { useState } from "react"
import { signIn } from 'next-auth/react'
import ButtonLoader from '../common/ButtonLoader'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { postCreateUser } from '../../redux/features/createUser'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()
    const dispatch = useDispatch()


    const handleSubmit = async (e) => { 
        e.preventDefault()
        if (email && email.includes('@') && email.includes('.') && name && password) {
            setLoading(true)
            dispatch(postCreateUser({ name, email, password })).then(result => {
                if (!result.error) {
                    setLoading(false)
                    toast.success('User created successfully')
                    router.push('/signin')
                } else {
                    setLoading(false)
                    toast.error('Email already Exists')
                }
            })
        } else {
            toast.info('Please fill all the fields correctly')
        }
    }


  return (
      <div className="flex justify-center items-center w-full bg-gray-800 h-screen px-2">
          <form onSubmit={handleSubmit}
              className="relative max-w-screen-sm mx-auto rounded-xl flex flex-col space-y-5 w-full bg-white !mt-10 h-[450px] py-3 px-1 md:p-5 ">
              <h1 className="uppercase font-medium text-center">Sign Up</h1>
              <div className="space-y-2 px-1 md:px-5 !mt-10">
                  <label htmlFor="name" className="ml-2 text-sm uppercase">Name</label>
                  <input
                      type="name"
                      name="name"
                      className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                      required
                      value={name}
                      onChange={(e) => { setName(e.target.value) }}
                  />
              </div>
              <div className="space-y-2 px-1 md:px-5">
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
              <div className="space-y-2 px-1 md:px-5">
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
                  <button onClick={handleSubmit} className="uppercase text-sm  text-white bg-primary-light px-5 rounded-full py-1">
                      {loading ? <ButtonLoader /> : "SIGN Up"}
                  </button>
                  <h1 className="text-sm uppercase cursor-pointer">Or signin</h1>
              </div>
          </form>
      </div>
  )
}

export default SignUp