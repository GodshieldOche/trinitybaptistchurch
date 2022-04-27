import Link from 'next/link'
import Image from 'next/image'

const Upcoming = () => {
    return (
        <div className="grid grid-cols-12 gap-2 items-center px-2 md:px-0 ">
            <div className="order-last col-span-4 sm:col-span-5 w-full sm:h-full h-[calc(100%-30px)] relative ">
                <Image src="/event.jpg"
                    className="object-cover w-full h-full"
                    layout="fill"
                    blurDataURL="data:..."
                    placeholder="blur"
                    alt="logo" />
            </div>
            <div className="col-span-8 sm:col-span-7 flex flex-col sm:ml-3">
                <div className="space-y-2">
                    <h1 className="uppercase text-xs font-light !mb-3 ">Conference</h1>
                    <h1 className="font-medium text-base uppercase  ">The Sovereignty of God</h1>
                    <h1 className=" text-xs ">9th October 2022</h1>

                    <h1 className=" text-xs !mt-8 !mb-3 ">Would be attending?</h1>

                    <div className="flex items-center space-x-3">
                        <Link href="/events/1">
                            <a>
                                <h1 className=" text-xs  py-[6px] px-3
                                            border border-primary-light text-[white]
                                            bg-primary-light cursor-pointer
                                            lg:bg-[white] lg:text-primary-light
                                            hover:lg:bg-primary-light hover:lg:text-[#fff]
                                            uppercase rounded-md
                                            ">Learn more</h1>
                            </a>
                        </Link>
                        <Link href="/events" >
                            <a>
                                <h1 className=" text-xs md:text-xs hover:text-sm border-b border-b-primary-black cursor-pointer">See all</h1>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming
