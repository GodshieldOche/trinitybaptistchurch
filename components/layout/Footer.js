import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className="">
            <div className="container lg:px-[2rem] py-4 !mt-10 px-2 md:px-0 space-y-4 ">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-5 md:space-y-0">
                    <div className="flex space-x-2 items-center">
                        <h1>follow us on:</h1>
                        <FacebookIcon className="text-3xl text-[blue]/80" />
                        <InstagramIcon className="text-3xl text-[black]/80" />
                        <YouTubeIcon className="text-3xl text-[red]/80" />
                    </div>
                    <div className="flex flex-col space-y-1">
                        <h1 className="uppercase text-sm md:text-base">New Resources in your inbox</h1>
                        <div className="flex">
                            <input type="text" className="border border-primary-dark py-1 
                        text-sm md:text-base px-3 md:px-5 outline-none text-primary-dark " placeholder="Email Address" />
                            <button className="border border-primary-dark py-1 px-3 md:px-4 uppercase
                        text-xs md:text-sm bg-primary-dark text-[white] ">Submit</button>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row space-y-4 !mt-5 md:!mt-10 md:space-y-0 md:justify-between items-start">
                    <div className="flex flex-col space-y-3">
                        <h1 className="text-sm md:text-base font-medium uppercase">Services</h1>
                        <h2 className="text-sm md:text-base uppercase">LORD'S DAY SERVICES:</h2>
                        <h2 className="text-xs md:text-sm ">Sunday School 9AM - 10AM</h2>
                        <h2 className="text-xs md:text-sm ">Morning Service 10AM - 11:30AM</h2>
                        <h2 className="text-xs md:text-sm ">Evening Service 4PM - 5:30PM</h2>
                        <h2 className="text-sm md:text-base uppercase !mt-4">TUSEDAY BIBLE STUDY: 6PM - 7:30PM</h2>
                        <h2 className="text-sm md:text-base uppercase ">FRIDAY PRAYER MEETING: 6PM - 7:30PM</h2>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <h1 className="text-sm md:text-base font-medium uppercase">LOCATION</h1>
                        <h2 className="text-xs md:text-sm ">Trinity Baptist Church,</h2>
                        <h2 className="text-xs md:text-sm ">House 4, Juba Street,</h2>
                        <h2 className="text-xs md:text-sm ">Galadimawa, Suncity Estate,</h2>
                        <h2 className="text-xs md:text-sm ">Abuja FCT</h2>
                        <h2 className="text-sm md:text-base uppercase !mt-4 underline cursor-pointer hover:scale-105 ">Maps and Direction </h2>

                    </div>
                    <div className="flex flex-col space-y-3">
                        <h1 className="text-sm md:text-base font-medium uppercase">CONTACT</h1>
                        <h2 className="text-sm md:text-base uppercase">M-F 8AM - 5PM</h2>
                        <h2 className="text-xs md:text-sm ">+234 902 999 829</h2>
                        <h2 className="text-xs md:text-sm ">+234 817 562 828</h2>
                    </div>
                </div>
                <h1 className="text-center text-xs md:text-sm !mt-4">Copyright © 2022 Trinity Baptist Church. All Rights Reserved.</h1>
            </div>
        </div>
    )
}

export default Footer
