import Image from "next/image"

const Hero = () => {
    return (
        <div className="container lg:px-[2rem] space-y-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:items-center">
                <div className="order-last !mt-5 lg:!mt-0 lg:order-first space-y-3 px-2 md:px-0 lg:max-w-md md:max-w-xl lg:mx-0 md:mx-auto ">
                    <h1 className="text-lg md:text-2xl text-center uppercase lg:text-left font-medium">Let The Message Of The Messiah Dwell Richly Among You.</h1>
                    <p className="text-sm md:text-base text-primary-black font-light text-center lg:text-left">Access our biblical resources here at TBC. Read, Watch and Listen to sound teachings from faithful Ministers of the Gospel, As we aim towards the unity of faith in the knowledge of Christ.</p>
                </div>
                <div>
                    <div className="w-full h-[250px] sm:h-[400px] relative">
                        <Image src="/img/study.jpg"
                            className="object-cover w-full h-full"
                            layout="fill"
                            blurDataURL="data:..."
                            placeholder="blur"
                            alt="logo" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero
