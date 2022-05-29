import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useRouter } from 'next/router'
import Link from "next/link"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAddEmail } from '../../redux/features/client/addEmail';

const Footer = () => {
    const [email, setEmail] = useState('')


    const router = useRouter()
    const dispatch = useDispatch()

    const handleSubmit = (e) => { 
        e.preventDefault()
        dispatch(postAddEmail({ email })).then((res) => {
            if (!res.error) {
                setEmail('')
            } else {
                console.log(res)
            }
        })
    }
    

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    const goHome = () => {
        if (router.route !== '/') {
            router.push('/')
        }   
    };


    return (
        <div className={`${router.pathname.includes("admin") || router.pathname.includes("sign")  ? "hidden" : "block"} `}>
            <div className="flex  w-full mb-1">
                <div
                    onClick={scrollToTop}
                    className="w-full cursor-pointer h-8 flex items-center justify-center bg-gray-600">
                    <button className="text-center text-xs uppercase text-gray-100">Scroll to top</button>
                </div>
                <div
                    onClick={goHome}
                    className={`${router.route === '/' ? "cursor-not-allowed" : "cursor-pointer"} w-full  h-8 flex items-center justify-center bg-gray-300`}>
                    <button disabled={router.route === '/'} className={`${router.route === '/' ? "text-gray-500" : "text-gray-800"} text-xs text-center uppercase `}>Go home</button>
                </div>
            </div>
            <div className="bg-gradient-to-r from-primary-dark to-primary-light text-[white]  pt-2">
                <div className="container lg:px-[2rem] py-4 !mt-10 px-2 md:px-0 space-y-4 ">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-5 md:space-y-0">
                        <div className="flex flex-col space-y-1 md:space-x-2 justify-center md:flex-row items-center">
                            <h1 className="text-sm lg:text-base">follow us on:</h1>
                            <div className="space-x-3">
                                <FacebookIcon className="text-xl lg:text-2xl " />
                                <InstagramIcon className="text-xl lg:text-2xl " />
                                <YouTubeIcon className="text-xl lg:text-2xl " />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <h1 className="uppercase text-xs lg:text-sm">New Resources in your inbox</h1>
                            <div className="flex ">
                                <input
                                    type="text"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border bg-transparent  py-1 text-sm lg:text-base !w-full h-9 px-3 lg:px-5  outline-none text-white "
                                    placeholder="Email Address" />
                                <button onClick={handleSubmit} className="border py-1 px-3 md:px-4 uppercase
                                    text-xs w-28 lg:text-sm bg-white text-black rounded-r-xl ">Submit</button>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col w-full md:flex-row space-y-8 !mt-5 md:!mt-10 md:space-y-0 md:justify-between !items-start">
                        <div className="flex flex-col w-full md:!w-fit text-center md:text-left space-y-3">
                            <h1 className="text-sm lg:text-base mb-4  font-medium uppercase">Services</h1>
                            <h2 className="text-xs lg:text-sm font-medium uppercase">LORD'S DAY SERVICES:</h2>
                            <h2 className="text-xs lg:text-sm ">Sunday School 9AM - 10AM</h2>
                            <h2 className="text-xs lg:text-sm ">Morning Service 10AM - 11:30AM</h2>
                            <h2 className="text-xs lg:text-sm ">Evening Service 4PM - 5:30PM</h2>
                            <h2 className="text-xs lg:text-sm font-medium uppercase !mt-6">TUSEDAY BIBLE STUDY: 6PM - 7:30PM</h2>
                            <h2 className="text-xs lg:text-sm font-medium uppercase !mt-6 ">FRIDAY PRAYER MEETING: 6PM - 7:30PM</h2>
                        </div>
                        <div className="flex flex-col w-full md:!w-fit text-center md:text-left space-y-3">
                            <h1 className="text-sm lg:text-base font-medium mb-4 uppercase">LOCATION</h1>
                            <h2 className="text-xs lg:text-sm ">Trinity Baptist Church,</h2>
                            <h2 className="text-xs lg:text-sm ">House 4, Juba Street,</h2>
                            <h2 className="text-xs lg:text-sm ">Galadimawa, Suncity Estate,</h2>
                            <h2 className="text-xs lg:text-sm ">Abuja FCT</h2>
                            <h2 className="text-xs lg:text-sm uppercase !mt-6 underline cursor-pointer hover:scale-105 ">Maps and Direction </h2>

                        </div>
                        <div className="flex flex-col w-full md:!w-fit text-center md:text-left space-y-3">
                            <h1 className="text-sm lg:text-base font-medium mb-4 uppercase">CONTACT</h1>
                            <h2 className="text-xs lg:text-sm uppercase">M-F 8AM - 5PM</h2>
                            <h2 className="text-xs lg:text-sm ">+234 902 999 829</h2>
                            <h2 className="text-xs lg:text-sm ">+234 817 562 828</h2>
                            <Link href="/signin">
                                <a>
                                    <h2 className="text-xs cursor-pointer uppercase lg:text-sm ">Admin signin</h2>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <h1 className="text-center text-xs md:text-sm !mt-4">Copyright © 2022 Trinity Baptist Church. All Rights Reserved.</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer
