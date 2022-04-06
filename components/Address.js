import Image from "next/image"

const Address = () => {
    return (
        <div className="container !mt-5 py-5 lg:px-[2rem] ">
            <div className="">
                <div className="w-full rounded-2xl h-[250px] md:h-[500px] relative">
                    <Image src="/img/tbcmap.png"
                        className="object-fill w-full h-full rounded-2xl"
                        layout="fill"
                        blurDataURL="data:..."
                        placeholder="blur"
                        alt="logo" />
                    <div className="hidden md:flex flex-col py-8 space-y-2 rounded-2xl shadow-2xl px-8 w-full md:w-[500px] bg-[white] md:absolute
                    top-5 left-5 ">
                        <h1 className="text-primary-dark font-medium  uppercase text-xl">Address</h1>
                        <h1>Trinity Baptist Church</h1>
                        <h1>House 4, Juba Streat</h1>
                        <h1>Suncity Estate, Galadimawa</h1>
                        <h1>Abuja, F.C.T</h1>
                        <h1 className="text-primary-dark font-medium  uppercase text-xl">Directions</h1>
                        <div className="flex items-center space-x-5 w-full !mt-3">
                            <h1 className="text-center px-4 py-2 bg-primary-light text-[white]">GOOGLE MAPS</h1>
                            <h1 className="text-center px-4 py-2 bg-primary-dark text-[white]">APPLE MAPS</h1>
                            
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden flex-col px-2 py-5 w-full bg-[white]">
                    <h1 className="text-primary-dark font-medium  uppercase text-lg">Address</h1>
                    <h1>Trinity Baptist Church</h1>
                    <h1>House 4, Juba Streat</h1>
                    <h1>Suncity Estate, Galadimawa</h1>
                    <h1>Abuja, F.C.T</h1>
                    <h1 className="text-primary-dark font-medium  uppercase text-lg">Directions</h1>
                    <div className="flex items-center space-x-5 w-full !mt-3">
                        <h1 className="text-center text-sm md:text-base px-4 py-2 bg-primary-light text-[white]">GOOGLE MAPS</h1>
                        <h1 className="text-center text-sm md:text-base  px-4 py-2 bg-primary-dark text-[white]">APPLE MAPS</h1>

                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Address
