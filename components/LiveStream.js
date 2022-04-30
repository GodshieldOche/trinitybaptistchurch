import Link from 'next/link'
import Image from 'next/image'

const LiveStream = () => {
    return (
        <div className="grid grid-cols-12 gap-2 items-center px-2 md:px-0 ">
            <div className="order-last md:order-first col-span-4 sm:col-span-5 w-full sm:h-full h-[calc(100%-30px)] relative ">
                <Image src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651307276/Global/bible_beofqt.jpg"
                    className="object-cover w-full h-full"
                    layout="fill"
                    blurDataURL="data:..."
                    placeholder="blur"
                    alt="logo" />
            </div>
            <div className="col-span-8 sm:col-span-7 flex flex-col sm:ml-3">
                <div className="space-y-2">
                    <h1 className="uppercase text-xs font-light !mb-3 ">Sunday morning service</h1>
                    <h1 className="font-medium text-base uppercase  ">The King who restores the sinner</h1>
                    <h1 className=" text-xs ">9th October 2022</h1>

                    <h1 className=" text-xs !mt-4 !mb-3 ">Live stream isn't started</h1>

                    <div className="flex items-center space-x-3">
                        <Link href="/events/1">
                            <a>
                                <h1 className=" text-xs  py-1 px-3
                                            border border-primary-light text-[white]
                                            bg-primary-light cursor-pointer
                                            lg:bg-[white] lg:text-primary-light
                                            hover:lg:bg-primary-light hover:lg:text-[#fff]
                                            uppercase
                                            ">Join live</h1>
                            </a>
                        </Link>
                        <h1 className=" text-xs md:text-xs hover:scale-105 border-b border-b-primary-black cursor-pointer">Download Bulletin</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveStream
