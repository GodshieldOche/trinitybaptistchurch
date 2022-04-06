import Image from "next/image"

const Latest = () => {

    const lists = [1,2,3,4,5,6]
    return (
        <div className="bg-[#eee] shadow-lg py-10 px-2 sm:px-0 ">
            <div className="container lg:px-[2rem] space-y-5">
                <div className="flex items-center space-x-1">
                    <span className="w-7 h-[2.5px] bg-primary-dark"></span>
                    <h1 className="text-base lg:text-lg font-medium uppercase">Latest Resources</h1>
                </div>
                
                {/* resource card list */}
                <div className="max-w-screen-lg mx-auto grid gap-2 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        lists.map(list => (
                            <div key={list} className="w-full flex flex-row-reverse md:flex-col bg-[white] space-x-1 md:space-x-0
                            md:py-0 md:px-0 px-1 py-2 shadow-md hover:shadow-2xl hover:scale-105 cursor-pointer">
                                <div className="w-[100px] h-[80px] md:w-full md:h-[170px] relative">
                                    <Image src="/img/jesus.jpg"
                                        className="object-cover w-full h-full"
                                        layout="fill"
                                        blurDataURL="data:..."
                                        placeholder="blur"
                                        alt="logo" />
                                    <div className=" hidden md:block uppercase text-sm absolute py-1 px-4 top-3 left-3 text-[white]/90 bg-primary-black/70">
                                        Sermon
                                    </div>
                                </div>
                                <div className="w-full md:p-5 space-y-2">
                                    <h1 className="text-xs uppercase">Sermon</h1>
                                    <h1 className="font-medium">Finishing Strong, Finishing Well</h1>
                                    <h1 className="text-sm text-secondary-black/80">9th Febuary, 2022</h1>
                                    <p className="hidden md:block text-sm text-left text-secondary-black/90">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                    <div className="flex items-center !mt-5 md:!mt-10 space-x-2">
                                        <div className="h-[30px] w-[30px] md:w-[40px] md:h-[40px] rounded-full relative">
                                            <Image src="/img/eleazar.jpg"
                                                className="object-cover w-full h-full rounded-full"
                                                layout="fill"
                                                blurDataURL="data:..."
                                                placeholder="blur"
                                                alt="logo" />
                                        </div>
                                        <h1 className="text-[15px] text-secondary-black md:text-base">Eleazar Maduka</h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full md:max-w-[250px] mx-auto !mt-5 px-5 py-[5px] flex justify-center
                bg-primary-light text-[white] cursor-pointer ">
                    <h1 className="uppercase text-sm md:text-base">See All</h1>
                </div>
            </div>
        </div>
    )
}

export default Latest
