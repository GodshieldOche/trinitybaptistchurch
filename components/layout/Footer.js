import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div className="bg-[#eee]/30 pt-2">
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
                        <div className="flex">
                            <input type="text" className="border border-primary-dark py-1 
                        text-sm lg:text-base bg-[#f5f5f5] !w-full h-9 px-3 lg:px-5 outline-none text-primary-dark " placeholder="Email Address" />
                            <button className="border border-primary-dark py-1 px-3 md:px-4 uppercase
                        text-xs w-28 lg:text-sm bg-primary-dark text-[white] ">Submit</button>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col w-full md:flex-row space-y-4 !mt-5 md:!mt-10 md:space-y-0 md:justify-between !items-start">
                    <div className="flex flex-col w-full md:!w-fit text-center md:text-left space-y-3">
                        <h1 className="text-sm lg:text-base  font-medium uppercase">Services</h1>
                        <h2 className="text-sm lg:text-base uppercase">LORD'S DAY SERVICES:</h2>
                        <h2 className="text-xs lg:text-sm ">Sunday School 9AM - 10AM</h2>
                        <h2 className="text-xs lg:text-sm ">Morning Service 10AM - 11:30AM</h2>
                        <h2 className="text-xs lg:text-sm ">Evening Service 4PM - 5:30PM</h2>
                        <h2 className="text-xs lg:text-sm uppercase !mt-4">TUSEDAY BIBLE STUDY: 6PM - 7:30PM</h2>
                        <h2 className="text-xs lg:text-sm uppercase ">FRIDAY PRAYER MEETING: 6PM - 7:30PM</h2>
                    </div>
                    <div className="flex flex-col w-full md:!w-fit text-center md:text-left space-y-3">
                        <h1 className="text-sm lg:text-base font-medium uppercase">LOCATION</h1>
                        <h2 className="text-xs lg:text-sm ">Trinity Baptist Church,</h2>
                        <h2 className="text-xs lg:text-sm ">House 4, Juba Street,</h2>
                        <h2 className="text-xs lg:text-sm ">Galadimawa, Suncity Estate,</h2>
                        <h2 className="text-xs lg:text-sm ">Abuja FCT</h2>
                        <h2 className="text-xs lg:text-sm uppercase !mt-4 underline cursor-pointer hover:scale-105 ">Maps and Direction </h2>

                    </div>
                    <div className="flex flex-col w-full md:!w-fit text-center md:text-left space-y-3">
                        <h1 className="text-sm lg:text-base font-medium uppercase">CONTACT</h1>
                        <h2 className="text-xs lg:text-sm uppercase">M-F 8AM - 5PM</h2>
                        <h2 className="text-xs lg:text-sm ">+234 902 999 829</h2>
                        <h2 className="text-xs lg:text-sm ">+234 817 562 828</h2>
                    </div>
                </div>
                <h1 className="text-center text-xs md:text-sm !mt-4">Copyright © 2022 Trinity Baptist Church. All Rights Reserved.</h1>
            </div>
        </div>
    )
}

export default Footer
