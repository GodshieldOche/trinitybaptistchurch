import Image from "next/image"

const Sections = () => {
    return (
        <div className="!mt-10 pb-10">
            <div className="container lg:px-[2rem] space-y-10 md:space-y-20">
                <div className="grid lg:gap-20 gap-5 grid-cols-1 md:grid-cols-2 items-center">
                    <div>
                        <div className="w-full h-[300px] md:h-[500px] relative">
                            <Image src="/img/mission.jpg"
                                className="object-cover w-full h-full"
                                layout="fill"
                                blurDataURL="data:..."
                                placeholder="blur"
                                alt="logo" />
                        </div>
                    </div>
                    <div className="flex flex-col px-2 md:px-0 space-y-2">
                        <h1 className="uppercase font-bold text-xl md:text-2xl">Our Mission</h1>
                        <p className="text-justify text-primary-black/90">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English Many desktop publishing packages and web page editors now use Lorem Ipsum
                        </p>
                        <div className="max-w-[230px] md:max-w-[300px] !mt-10 px-3 py-2 flex justify-center
                bg-primary-light text-[white] cursor-pointer ">
                            <h1 className="uppercase text-sm md:text-base  ">Read about Tbc Abuja</h1>
                        </div>
                    </div>
                </div>
                <div className="grid lg:gap-20 gap-5 grid-cols-1 md:grid-cols-2 items-center">
                    <div className="order-first md:order-last">
                        <div className="w-full h-[300px] md:h-[500px] relative">
                            <Image src="/img/give.jpg"
                                className="object-cover w-full h-full"
                                layout="fill"
                                blurDataURL="data:..."
                                placeholder="blur"
                                alt="logo" />
                        </div>
                    </div>
                    <div className="flex flex-col px-2 md:px-0 space-y-2">
                        <h1 className="uppercase text-primary-light">News</h1>
                        <h1 className="uppercase font-bold text-xl md:text-2xl">Church Building Project</h1>
                        <p className="text-justify text-primary-black/90">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English Many desktop publishing packages and web page editors now use Lorem Ipsum
                        </p>
                        <div className="flex !mt-10 space-x-3  ">
                            <h1 className="uppercase text-sm md:text-base  px-5 py-2 text-center
                            bg-primary-light text-[white] cursor-pointer ">Read More</h1>
                            <h1 className="uppercase text-sm md:text-base  px-5 py-2 text-center
                            bg-primary-dark text-[white] cursor-pointer">Give</h1>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Sections
