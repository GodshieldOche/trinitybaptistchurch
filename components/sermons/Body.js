import Image from "next/image"


const Body = () => {
    return (
        <div className="max-w-screen-sm mx-auto px-2 md:px-0 ">
            <div className="flex flex-col space-y-3 w-full">
                <h1 className="text-xs text-center font-light uppercase">9th Febuary 2022</h1>
                <h1 className="text-xl md:text-3xl font-medium text-center uppercase">The King who restores the sinner</h1>
                
                <div>
                    <div className="flex items-center space-x-2 justify-center">
                        <h1 className=" ">Scripture:</h1>
                        <h1 className=" ">Mark 4:1-12</h1>
                    </div>
                    <div className="flex items-center space-x-2 justify-center">
                        <h1 className=" ">Speaker:</h1>
                        <h1>Pastor Joshua Bolaji</h1>
                    </div>
                </div>
                
                <div className="flex flex-col !mt-7 space-y-3">
                    <p className="md:text-lg md:leading-8 font-light text-justify px-1">
                        We call it serious joy not only because it coexists in the same heart, at the same time, with the gravity of reverence and the groaning of sin, but also because it is not peripheral but central — serious in the sense of centrally important. It is not the negligible caboose at the end of the train, but belongs to the very fuel that runs the engine. And when I say centrally important, I mean central to God’s very being — central to God’s ultimate purpose in creating the world — and therefore also central to God-glorifying Christian living.
                    </p>
                </div>
                <div className="flex flex-col w-full space-y-4 !mt-10">
                    <h1 className="text-center uppercase">About the Speaker</h1>
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
    )
}

export default Body
