import Image from "next/image"

const Address = () => {
    return (
        <div className="container !mt-5 py-5 lg:px-[2rem] ">
            <div className="">
                <div className="w-full rounded-2xl h-[500px] relative">
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

export default Address
