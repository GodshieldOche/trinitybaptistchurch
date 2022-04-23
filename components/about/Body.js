import Image from "next/image"

const Body = () => {
    return (
        <div className="container lg:px-[2rem] space-y-4">
            <h1 className="text-center text-sm uppercase font-medium"> on this page</h1>
            <div className=" max-w-screen-sm mx-auto space-y-5  md:px-0 ">
                <div className="flex pb-5 !flex-nowrap !overflow-x-auto whitespace-nowrap space-x-4 w-full justify-between px-4 ">
                    <a href="#history" className="uppercase font-medium  text-xs cursor-pointer text-primary-light">Church history</a>
                    <a className="uppercase font-medium  text-xs cursor-pointer text-primary-light">What we teach/Believe</a>
                    <a className="uppercase font-medium  text-xs cursor-pointer text-primary-light">Vision statement</a>
                    <a className="uppercase font-medium  text-xs cursor-pointer text-primary-light">Leadership</a>
                    <a className="uppercase font-medium  text-xs cursor-pointer text-primary-light">contact</a>
                </div>
                
            </div>
            <div id="history" className="max-w-screen-md mx-auto">
                <div className="flex flex-col  space-y-3">
                    <h1 className="text-center text-xl uppercase font-medium ">Our History</h1>
                    <div className="w-full h-[300px] md:h-[400px] relative">
                        <Image src="/img/church.jpg"
                            className="object-cover w-full h-full"
                            layout="fill"
                            blurDataURL="data:..."
                            placeholder="blur"
                            alt="logo" />
                    </div>
                    <p className="font-Georgia leading-relaxed  indent-8 text-justify px-2 md:px-5">On July 1, 1956, Grace Community Church of the Valley conducted its first public services. Founded as a nondenominational church, its emphasis was on the basics of Christianity. The fledgling church called Dr. Don Householder, one of the great preachers of his generation, to be its founding pastor. Worship services were conducted in the two main rooms of the converted town house, where a wall had been taken down to enable Dr. Householder to see his entire congregation while preaching. </p>

                    <p className="font-Georgia leading-relaxed  indent-8 text-justify px-2 md:px-5">
                        In 1957, services were moved to the newly built chapel at the present location on Roscoe Boulevard. Less than two years later, two services were being conducted on Sunday mornings, the first education building was built to house Sunday school classes, and Grace Church became known as "the fastest growing church in Los Angeles."

                        Dr. Householder died in April 1965, and in 1966, Dr. Richard Elvee was called to be pastor. Dr. Elvee had become known as a church builder. Grace Church continued to grow under Dr. Elvee's leadership until he passed away in September 1968. </p>
                    <p className="font-Georgia leading-relaxed  indent-8 text-justify px-2 md:px-5">
                        John MacArthur assumed the pastorate of Grace in February 1969. Prior to this, John had been assistant pastor in the church his father led in Burbank; he had also traveled widely as a conference speaker and representative for Talbot Theological Seminary, from which he graduated with honors. </p>
                    <p className="font-Georgia leading-relaxed  indent-8 text-justify px-2 md:px-5">
                        During those early days of John's ministry, the church doubled in size every two years. We moved from meeting in the Chapel to the newly built Family Center (now the Gymnasium) in 1971, and from there into the current Worship Center in 1977. Since then, additional buildings for teaching and fellowship use have been erected, filling a campus that never sleeps. Truly, the Lord has blessed us with exceptional growth in terms of both people and ministries. </p>
                    <p className="font-Georgia leading-relaxed  indent-8 text-justify px-2 md:px-5">
                        More important than numbers, programs, and structures, however, is the foundation for the spiritual life of Grace Community Church that has been built. This foundation includes sound doctrine, spiritual leadership, and active service. We are convinced that God's legacy of faithfulness to us will continue in the future if we remain faithful to Him and His Word.</p>
                </div>
            </div>

            <div>

            </div>

            
        </div>
    )
}

export default Body


{/* <div className="grid lg:gap-20 gap-5 grid-cols-1 md:grid-cols-2 items-center">
                <div>
                    <div className="w-full h-[300px] md:h-[400px] relative">
                        <Image src="/img/mission.jpg"
                            className="object-cover w-full h-full"
                            layout="fill"
                            blurDataURL="data:..."
                            placeholder="blur"
                            alt="logo" />
                    </div>
                </div>
                <div className="flex flex-col px-2 md:px-0 space-y-2">
                    <h1 className="uppercase font-medium text-center md:text-left text-xl md:text-2xl">Our Mission</h1>
                    <p className="text-center font-light">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English Many desktop publishing packages and web page editors now use Lorem Ipsum
                    </p>
                </div>
            </div> */}