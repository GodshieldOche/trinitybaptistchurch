import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import LiveStream from "./LiveStream"
import Upcoming from "./Upcoming"

const Hero = () => {
    const [isLiveStream, setIsLiveStream] = useState(false)

    return (
        <div className="container xl:px-[2rem] lg:px-[1rem] grid gap-5 xl:gap-20 mb-5  grid-cols-1 lg:grid-cols-12 items-center w-full overflow-hidden">
        {/* col 1 */}
            <div className="lg:col-span-5 order-last lg:order-first space-y-10 ">
                <div className="space-y-2 px-2 md:px-0">
                    <h1 className="text-center lg:text-left text-2xl uppercase font-medium text-secondary-black/90 md:text-secondary-black ">Trinity Baptist Church</h1>
                    <h1 className="text-primary-dark text-sm text-center lg:text-left">GOD-FOCUSED, CHRIST-CENTERED, GOSPEL-DRIVEN CHURCH LOCATED AT THE HEART OF ABUJA</h1>
                </div>
                <div className="flex justify-center !my-10 lg:justify-start items-center">
                    <Link href="/about">
                        <a>
                            <h1 className="uppercase border
                            border-primary-light px-4 md:px-5 py-2 bg-primary-light
                            lg:bg-[#fff] lg:text-primary-light
                            text-sm
                            hover:lg:bg-primary-light hover:lg:text-[#fff] cursor-pointer
                            text-primary-white "
                            >New Here? Learn more</h1>
                        </a>
                    </Link>
                </div>
                <div className="!mt-20 md:!mt-0 space-y-2">
                    <div className="grid grid-cols-2 mb-3 items-center border-b border-b-primary-dark">
                        <div
                            onClick={() => setIsLiveStream(false)}
                            className={`${!isLiveStream ? "bg-primary-dark text-[#fff]" : "hover:bg-primary-dark/10"} cursor-pointer w-full  py-3`}>
                            <h1 className="text-center text-sm uppercase ">Upcoming Events</h1>
                        </div>
                        <div
                            onClick={() => setIsLiveStream(true)}
                            className={` ${isLiveStream ? "bg-primary-dark text-[#fff]" : "hover:bg-primary-dark/10"} w-full  py-3 cursor-pointer`}>
                            <h1 className="text-sm uppercase text-center ">Live Stream Service</h1>
                        </div>
                    </div>
                    {
                        isLiveStream ? <LiveStream /> : <Upcoming />
                    }
                </div>
                
            </div>


        {/* col 2 */}
            <div className="lg:col-span-7">
                <div className="w-full h-[250px] sm:h-[400px] lg:h-[500px] relative">
                    <Image src="/hero.jpg"
                        className="object-cover w-full h-full"
                        layout="fill"
                        blurDataURL="data:..."
                        placeholder="blur"
                        alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Hero
