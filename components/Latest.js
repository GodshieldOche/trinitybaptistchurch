import Image from "next/image"
import Link from "next/link";

const Latest = () => {

    const lists = [1,2,3,4,5,6]
    return (
        <div className="bg-[white] py-10 px-2 sm:px-0 ">
            <div className="container lg:px-[2rem] space-y-5">
                <div className="flex items-center space-x-1">
                    <span className="w-7 h-[2.5px] bg-primary-dark"></span>
                    <h1 className="text-base lg:text-lg  uppercase">Latest Resources</h1>
                </div>
                
                {/* resource card list */}
                <div className="max-w-screen-lg mx-auto grid gap-2 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        lists.map(list => (
                            <div key={list} className="w-full flex flex-row-reverse md:flex-col md:rounded-xl bg-[white] space-x-1 md:space-x-0
                            md:py-0 md:px-0 px-1 py-2 shadow-lg md:shadow-xl hover:md:shadow-2xl hover:md:scale-105 cursor-pointer">
                                <div className="w-[100px] h-[80px] md:w-full md:h-[170px] md:rounded-t-xl relative">
                                    <Image src="/img/study.jpg"
                                        className="object-cover w-full h-full md:rounded-t-xl"
                                        layout="fill"
                                        blurDataURL="data:..."
                                        placeholder="blur"
                                        alt="logo" />
                                    <div className=" hidden md:block uppercase text-xs absolute py-1 px-4 top-3 left-3 text-[white]/80 bg-primary-black/60">
                                        Sermon
                                    </div>
                                </div>
                                <div className="w-full md:p-5 space-y-3">
                                    <h1 className="text-xs uppercase font-light">Sermon</h1>
                                    <h1 className="">Finishing Strong, Finishing Well</h1>
                                    <h1 className="text-sm font-light">9th Febuary, 2022</h1>
                                    <p className="hidden md:block text-sm font-light text-left text-secondary-black/90">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                    <div className="flex items-center !mt-5 md:!mt-10 space-x-2">
                                        <div className="h-[30px] w-[30px] md:w-[35px] md:h-[35px] rounded-full relative">
                                            <Image src="/img/eleazar.jpg"
                                                className="object-cover w-full h-full rounded-full"
                                                layout="fill"
                                                blurDataURL="data:..."
                                                placeholder="blur"
                                                alt="logo" />
                                        </div>
                                        <h1 className="text-sm text-secondary-black font-light md:text-base">Eleazar Maduka</h1>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                 <Link href="/resources">
                    <a>
                        <div className="w-full md:max-w-[250px] mx-auto !mt-5 px-5 py-[5px] flex justify-center
                        bg-primary-light text-[white] cursor-pointer hover:scale-105 hover:shadow-xl ">
                        
                            <h1 className="uppercase text-sm md:text-base">See All</h1>
                            
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Latest
