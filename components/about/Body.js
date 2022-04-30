import Image from "next/image"


const statements = [
    {
        topic: "Bible",
        text: "The Bible, in its entirety, is the infallible, inerrant, and inspired Word of God; it is divine revelation that carries the full weight of God’s authority and to which we are obliged to submit.",
        id: 1
    },
    {
        topic: "The Trinity",
        text: "Within the Godhead there is a unity of three distinct yet fully divine persons, the Father, the Son, and the Holy Spirit; these three are one true, eternal God, the same in substance, equal in power and glory.",
        id: 2
    },
    {
        topic: "God",
        text: "God is a Spirit, infinite, eternal, and unchangeable in His being, wisdom, power, holiness, justice, goodness, and truth. God is fully omniscient, omnipotent, and omnipresent, not given to learning or “openness.”",
        id: 3
    },
    {
        topic: "Jesus Christ",
        text: "Jesus Christ is truly God and truly man, having two natures inseparably united in one divine person without confusion, mixture, separation, or division. Each nature retains its own attributes. In the incarnation, Jesus was born of the Virgin Mary, lived a perfect life among us, was crucified, dead, and buried, rose on the third day, ascended to heaven, and will come again in glory and judgment. He is the only Mediator between God and man.",
        id: 4
    },
    {
        topic: "The Holy Spirit",
        text: "The Holy Spirit is of one substance with the Father and the Son. He eternally proceeds from the Father and the Son, and He dwells in the hearts of believers, effecting their regeneration monergistically and operating in their sanctification synergistically.",
        id: 5
    },
    {
        topic: "Creation",
        text: "God, by the word of His power, created from nothing the heavens and the earth and all that is in them. He further preserves and governs all His creatures and all their actions according to His most holy, wise, and powerful providence.",
        id: 6
    },
    {
        topic: "Man",
        text: "God, by the word of His power, created from nothing the heavens and the earth and all that is in them. He further preserves and governs all His creatures and all their actions according to His most holy, wise, and powerful providence.",
        id: 7
    },
    {
        topic: "Atonement",
        text: "God, by the word of His power, created from nothing the heavens and the earth and all that is in them. He further preserves and governs all His creatures and all their actions according to His most holy, wise, and powerful providence.",
        id: 8
    },
    {
        topic: "The Law",
        text: "God, by the word of His power, created from nothing the heavens and the earth and all that is in them. He further preserves and governs all His creatures and all their actions according to His most holy, wise, and powerful providence.",
        id: 9
    },
    {
        topic: "Christianity & Culture",
        text: "God, by the word of His power, created from nothing the heavens and the earth and all that is in them. He further preserves and governs all His creatures and all their actions according to His most holy, wise, and powerful providence.",
        id: 10
    },
    
]

const leaders = [1,2,3,4]

const Body = () => {
    return (
        <div>
            <div className="container lg:px-[2rem] space-y-5">
                <h1 className="text-center text-sm uppercase font-medium"> on this page</h1>
                <div className=" max-w-screen-sm mx-auto space-y-5  md:px-0 ">
                    <div className="flex pb-5 !flex-nowrap !overflow-x-auto whitespace-nowrap space-x-4 w-full justify-between px-4 ">
                        <a href="#history" className="uppercase font-medium  text-xs cursor-pointer text-primary-light">Church history</a>
                        <a href="#statement" className="uppercase font-medium  text-xs cursor-pointer text-primary-light">What we teach/Believe</a>
                        <a href="#mission" className="uppercase font-medium  text-xs cursor-pointer text-primary-light">Vision statement</a>
                        <a href="#leadership" className="uppercase font-medium  text-xs cursor-pointer text-primary-light">Leadership</a>
                        <a href="#contact" className="uppercase font-medium  text-xs cursor-pointer text-primary-light">contact</a>
                    </div>

                </div>


                <div id="history" className="max-w-screen-md mx-auto py-5 ">
                    <div className="flex flex-col  space-y-4">
                        <h1 className="text-center text-2xl uppercase font-medium ">Our History</h1>
                        <div className="w-full h-[300px] md:h-[400px] relative">
                            <Image src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651306708/Global/church_zl8zsz.jpg"
                                className="object-cover w-full h-full"
                                layout="fill"
                                blurDataURL="data:..."
                                placeholder="blur"
                                alt="logo" />
                        </div>
                        <p className=" font-light leading-relaxed  indent-8 text-justify px-2 md:px-5">On July 1, 1956, Grace Community Church of the Valley conducted its first public services. Founded as a nondenominational church, its emphasis was on the basics of Christianity. The fledgling church called Dr. Don Householder, one of the great preachers of his generation, to be its founding pastor. Worship services were conducted in the two main rooms of the converted town house, where a wall had been taken down to enable Dr. Householder to see his entire congregation while preaching. </p>

                        <p className=" font-light leading-relaxed  indent-8 text-justify px-2 md:px-5">
                            In 1957, services were moved to the newly built chapel at the present location on Roscoe Boulevard. Less than two years later, two services were being conducted on Sunday mornings, the first education building was built to house Sunday school classes, and Grace Church became known as "the fastest growing church in Los Angeles."

                            Dr. Householder died in April 1965, and in 1966, Dr. Richard Elvee was called to be pastor. Dr. Elvee had become known as a church builder. Grace Church continued to grow under Dr. Elvee's leadership until he passed away in September 1968. </p>
                        <p className=" font-light leading-relaxed  indent-8 text-justify px-2 md:px-5">
                            John MacArthur assumed the pastorate of Grace in February 1969. Prior to this, John had been assistant pastor in the church his father led in Burbank; he had also traveled widely as a conference speaker and representative for Talbot Theological Seminary, from which he graduated with honors. </p>
                        <p className=" font-light leading-relaxed  indent-8 text-justify px-2 md:px-5">
                            During those early days of John's ministry, the church doubled in size every two years. We moved from meeting in the Chapel to the newly built Family Center (now the Gymnasium) in 1971, and from there into the current Worship Center in 1977. Since then, additional buildings for teaching and fellowship use have been erected, filling a campus that never sleeps. Truly, the Lord has blessed us with exceptional growth in terms of both people and ministries. </p>
                        <p className=" font-light leading-relaxed  indent-8 text-justify px-2 md:px-5">
                            More important than numbers, programs, and structures, however, is the foundation for the spiritual life of Grace Community Church that has been built. This foundation includes sound doctrine, spiritual leadership, and active service. We are convinced that God's legacy of faithfulness to us will continue in the future if we remain faithful to Him and His Word.</p>
                    </div>
                </div>

                <div>

                </div>


            </div>
            <div className="bg-gray-600 text-white py-20" id="statement">
                <div  className="max-w-screen-md mx-auto">
                    <div className="flex flex-col justify-center   space-y-3">
                        <h1 className="text-center text-2xl uppercase font-medium">Statement of faith</h1>
                        <p className="pb-14 leading-relaxed text-sm text-center px-2 md:px-5" >Trinity Baptist Church adheres to the ancient statements of faith (the Apostles’ Creed, the Nicene Creed, and the Creed of Chalcedon) and affirms the historic Christian faith as expressed in the five solas of the Reformation and the consensus of the historic Reformed confessions (Westminster Standards, Three Forms of Unity, and 1689 London Baptist Confession of Faith).</p>
                    </div>
                    <div className="flex flex-col space-y-5 px-2 md:px-5">
                        {
                            statements.map(statement => (
                                <div key={statement.id} className="flex flex-col space-y-2">
                                    <h1 className="font-medium ">{ statement.topic }</h1>
                                    <p className="font-light text-sm ">{ statement.text}</p>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
            </div>
            <div className="py-10" id="mission">
                <div className="container lg:px-[2rem]">
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 items-center">
                        <div>
                            <div className="w-full h-[300px] md:h-[500px] relative">
                                <Image src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651306706/Global/mission_c2loub.jpg"
                                    className="object-cover w-full h-full"
                                    layout="fill"
                                    blurDataURL="data:..."
                                    placeholder="blur"
                                    alt="logo" />
                            </div>
                        </div>
                        <div className="flex flex-col px-2 md:px-0 space-y-2">
                            <h1 className="uppercase font-medium text-center md:text-left text-xl md:text-2xl">Our Mission</h1>
                            <p className="text-justify md:text-left font-light">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters as opposed to using Content here content here making it look like readable English Many desktop publishing packages and web page editors now use Lorem Ipsum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-5 " id="leadership">
                <div className="max-w-screen-md mx-auto px-2 md:px-0 space-y-10">
                    <h1 className="text-2xl font-medium text-center uppercase">Leadership</h1>
                    <div className="grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            leaders.map(leader => (
                                <div key={leader.id} className="flex flex-col space-y-2 shadow-xl">
                                    <div className="w-full mx-auto h-[150px]  relative">
                                        <Image src="/img/abutu.jpg"
                                            className="object-cover w-full h-full"
                                            layout="fill"
                                            blurDataURL="data:..."
                                            placeholder="blur"
                                            alt="logo" />
                                    </div>
                                    <div className="py-3 flex flex-col space-y-2">
                                        <h1 className="text-center text-sm font-medium uppercase">Abutu Peter Joshua</h1>
                                        <h2 className="text-center text-xs uppercase">Pastor/Teacher</h2>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="container lg-:px-[2rem] py-10 space-y-5" id="contact">
                <div className="flex flex-col space-y-8">
                    <h1 className="text-2xl font-medium uppercase text-center">Contact</h1>
                    <div className="max-w-screen-lg mx-auto mt- grid grid-cols-1 gap-7 md:grid-cols-2">
                        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center space-x-4">
                            <h1 className="uppercase font-medium text-primary-dark">Contact us via</h1>
                            <div className="flex flex-col space-y-2">
                                <h1 className="text-sm "><span className="font-medium uppercase">Email:</span> trinitybaptist@gmail.com</h1>
                                <h1 className="text-sm "><span className="font-medium uppercase">Phone:</span> 070 306 745 129</h1>
                                <h1 className="text-sm "><span className="font-medium uppercase">Social Media:</span> facebook, instagram</h1>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center space-x-4">
                            <h1 className="uppercase font-medium text-primary-dark">Services</h1>
                            <div className="flex flex-col space-y-2">
                                <div className="flex flex-col space-y-1">
                                    <h1 className="text-primary-light text-center md:text-left uppercase font-medium">Lord's day services</h1>
                                    <h1 className="text-sm "><span className="font-medium uppercase">Sunday school:</span> 9:00AM - 10:30AM</h1>
                                    <h1 className="text-sm "><span className="font-medium uppercase">Morning Service:</span> 10:00AM - 11:30AM</h1>
                                    <h1 className="text-sm "><span className="font-medium uppercase">Evening Service:</span> 4:00PM - 5:30PM</h1>
                                </div>
                                <h1 className="text-sm "><span className="font-medium uppercase text-primary-light">Tuesday Bible Study:</span> 6:00PM - 7:30PM</h1>
                                <h1 className="text-sm "><span className="font-medium uppercase text-primary-light">Friday Prayer Meeting:</span> 6:00PM - 7:30PM</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="uppercase text-center font-medium text-primary-dark">church Address</h1>
                <div className="w-full rounded-2xl h-[400px]  md:h-[500px] relative">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.811014338845!2d7.431193214786354!3d8.98953089354829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b4579802d1f%3A0x95fb206cd5ea74f5!2sTrinity%20Baptist%20Church%2C%20Abuja!5e0!3m2!1sen!2sng!4v1650270096555!5m2!1sen!2sng"
                        className="absolute top-0 left-0 bottom-0 right-0 w-full h-full" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="flex sm:hidden flex-col px-2 py-5 w-full space-y-1 bg-[white]">
                    <h1 className="text-primary-dark font-medium  uppercase text-lg !mb-3">Address</h1>
                    <h1>Trinity Baptist Church</h1>
                    <h1>House 4, Juba Streat</h1>
                    <h1>Suncity Estate, Galadimawa</h1>
                    <h1>Abuja, F.C.T</h1>
                </div>
            </div>
        </div>

    )
}

export default Body


