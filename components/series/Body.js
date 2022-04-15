import Image from "next/image"
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

const Body = ({series}) => {
    return (
        <div className="container container lg:px-[2rem]  px-2 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 ">

                {/* first grid */}
                <div className="lg:col-span-7">
                    <div className="flex flex-col space-y-3 w-full">
                        <h1 className="text-xs text-center lg:text-left font-light uppercase">9th Febuary 2022</h1>
                        <h1 className="text-xl md:text-3xl font-medium text-center lg:text-left uppercase">The King who restores the sinner</h1>

                        <div>
                            <div className="flex items-center space-x-2 justify-center lg:justify-start">
                                <h1 className=" ">Scripture:</h1>
                                <h1 className=" ">Mark 4:1-12</h1>
                            </div>
                            <div className="flex items-center space-x-2 justify-center lg:justify-start">
                                <h1 className=" ">Speaker:</h1>
                                <h1>Pastor Joshua Bolaji</h1>
                            </div>
                        </div>

                        <div className="flex flex-col !mt-10 space-y-3">
                            <div className="flex items-center space-x-1">
                                <span className="w-5 h-[2.5px] bg-primary-dark"></span>
                                <h1 className="text-sm lg:text-base font-medium capitalize">About the message</h1>
                            </div>
                            <p className="md:text-lg md:leading-8 font-light text-justify px-1">
                                We call it serious joy not only because it coexists in the same heart, at the same time, with the gravity of reverence and the groaning of sin, but also because it is not peripheral but central — serious in the sense of centrally important. It is not the negligible caboose at the end of the train, but belongs to the very fuel that runs the engine. And when I say centrally important, I mean central to God’s very being — central to God’s ultimate purpose in creating the world — and therefore also central to God-glorifying Christian living.
                            </p>
                        </div>
                        <div className="flex flex-col w-full space-y-4 !mt-10">
                            <div className="flex items-center space-x-1">
                                <span className="w-5 h-[2.5px] bg-primary-dark"></span>
                                <h1 className="text-sm lg:text-base font-medium capitalize">About the Speaker</h1>
                            </div>
                            <div className="items-center">
                                <div className="w-[60px] md:w-[70px] h-[60px] md:h-[70px] rounded-full float-left mr-2  relative ">
                                    <Image src="/img/eleazar.jpg"
                                        className="object-cover rounded-full w-full h-full "
                                        layout="fill"
                                        blurDataURL="data:..."
                                        placeholder="blur"
                                        alt="logo" />
                                </div>
                                <p className="text-base md:leading-8 font-light text-justify px-1">We call it serious joy not only because it coexists in the same heart, at the same time, with the gravity of reverence and the groaning of sin, but also because it is not peripheral but central — serious in the sense of centrally important. It is not the negligible caboose at the end of the train, but belongs to the very fuel that runs the engine.</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* second grid */}
                <div className=" lg:col-span-5">
                    <div className="flex flex-col !mt-2 md:mt-5 !space-y-3 max-h-[400px] !overflow-y-auto">
                        {
                            series.map((list, index) => (
                                <div key={list.id} className="flex py-3 hover:bg-secondary-one/20 cursor-pointer items-center justify-between space-x-2 px-2 border-b border-b-primary-black/10">
                                    <div className="flex flex-col space-y-2">
                                        <div className="flex space-x-3">
                                            <GraphicEqIcon className="text-[orange] !text-base" />
                                            <OndemandVideoIcon className="text-[red]/80 !text-base" />
                                            <h1 className="text-xs font-light uppercase">| 9th Feb 2022</h1>
                                        </div>
                                        <h1 className=" text-base md:text-lg capitalize ">{`${index + 1}. ${list.title} `}</h1>
                                        <h1 className="font-light text-sm ">{ list.scripture }</h1>
                                        <div className="flex items-center !mt-3 space-x-2">
                                            <div className="h-[25px] w-[25px] rounded-full relative">
                                                <Image src="/img/eleazar.jpg"
                                                    className="object-cover w-full h-full rounded-full"
                                                    layout="fill"
                                                    blurDataURL="data:..."
                                                    placeholder="blur"
                                                    alt="logo" />
                                            </div>
                                            <h1 className="text-sm  font-light capitalize">{ list.preacher }</h1>
                                        </div>
                                    </div>
                                    <div className="w-[70px] h-[75px] rounded-lg  relative">
                                        <Image src="/img/sermons.jpg"
                                            className="object-cover rounded-lg w-full h-full "
                                            layout="fill"
                                            blurDataURL="data:..."
                                            placeholder="blur"
                                            alt="logo" />
                                    </div>

                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Body
