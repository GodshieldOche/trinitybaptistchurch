import Image from "next/image"
import Link from "next/link"

const Hero = () => {
    return (
        <div className="container grid gap-5 xl:gap-20 mb-5  grid-cols-1 lg:grid-cols-12 items-center w-full overflow-hidden">
        {/* col 1 */}
            <div className="lg:col-span-5 order-last lg:order-first space-y-10 ">
                <div className="space-y-2 px-2 md:px-0">
                    <h1 className="text-center lg:text-left text-2xl lg:text-3xl uppercase font-medium text-secondary-black/90 md:text-secondary-black ">Trinity Baptist Church</h1>
                    <h1 className="text-primary-dark text-sm md:text-base text-center lg:text-left">GOD-FOCUSED, CHRIST-CENTERED, GOSPEL-DRIVEN CHURCH LOCATED AT THE HEART OF ABUJA</h1>
                </div>
                <div className="flex justify-center !my-10 lg:justify-start items-center">
                    <Link href="/">
                        <a>
                            <h1 className="uppercase border
                            border-primary-light px-4 md:px-5 py-2 bg-primary-light
                            lg:bg-[#fff] lg:text-primary-light
                            text-sm md:text-base
                            hover:lg:bg-primary-light hover:lg:text-[#fff] cursor-pointer
                            text-primary-white "
                            >New Here? Learn more</h1>
                        </a>
                    </Link>
                </div>
                <div className="!mt-20 md:!mt-0 space-y-2">
                    <div className="grid grid-cols-2 mb-3 items-center border-b border-b-primary-dark">
                        <div className="w-full bg-primary-dark py-3">
                            <Link href="/">
                                <a>
                                    <h1 className="text-center text-sm uppercase md:text-base text-[#fff]">Upcoming Events</h1>
                                </a>
                            </Link>
                        </div>
                        <div className="w-full hover:bg-primary-dark/10 py-3">
                            <Link href="/">
                                <a>
                                    <h1 className="text-sm uppercase md:text-base text-center">Live Stream Service</h1>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 px-2 md:px-0 ">
                        <div className="order-last md:order-first col-span-5 sm:col-span-6 w-full sm:h-full h-[120px] relative ">
                            <Image src="/event.jpg"
                                className="object-cover w-full h-full"
                                layout="fill"
                                blurDataURL="data:..."
                                placeholder="blur"
                                alt="logo" />
                        </div>
                        <div className="col-span-7 sm:col-span-6 flex flex-col sm:ml-3">
                            <div className="space-y-2">
                                <h1 className="uppercase text-xs md:text-sm font-light !mb-3 ">Conference</h1>
                                <h1 className="font-medium text-lg  ">The Sovereignty of God</h1>
                                <h1 className=" text-xs md:text-sm ">9th October 2022</h1>

                                <h1 className=" text-sm !mt-8 !mb-3 ">Would be attending?</h1>

                                <div className="flex items-center space-x-3">
                                    <h1 className=" text-xs md:text-sm py-[6px] px-3
                                    border border-primary-light text-[white]
                                    bg-primary-light cursor-pointer
                                    lg:bg-[white] lg:text-primary-light
                                    hover:lg:bg-primary-light hover:lg:text-[#fff]
                                    uppercase
                                    ">Learn more</h1>
                                    <h1 className=" text-xs md:text-sm hover:text-[13px] border-b border-b-primary-black cursor-pointer">See all</h1>
                                </div>
                            </div>
                        </div>
                    </div>
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
