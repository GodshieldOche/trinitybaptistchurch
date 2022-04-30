import Image from "next/image"
import Link from "next/link"

const Categories = () => {

    const lists = [
        {
            name: "sermons",
            link: "sermons",
            image: "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651307278/Global/sermons_nbw4cx.jpg",
            id: 1
        },
        {
            name: "preaching series",
            link: "series",
            image: "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651307274/Global/series_yvd6gq.jpg",
            id: 2
        },
        {
            name: "conference messages",
            link: "conference",
            image: "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651307275/Global/conference_eojsyc.jpg",
            id: 3
        },
        {
            name: "bible study",
            link: "biblestudy",
            image: "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651307276/Global/bible_beofqt.jpg",
            id: 5
        },
    ]
    return (
        <div className="container lg:px-[2rem] space-y-5">
            <div className="flex items-center space-x-1">
                <span className="w-7 h-[2.5px] bg-primary-dark"></span>
                <h1 className="text-base lg:text-lg font-medium uppercase">resources</h1>
            </div>
            <div className="max-w-screen-lg mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-0">
                {
                    lists.map(list => (
                      
                        <Link href={`/resources/${list.link}`} key={list.id} className="selection:bg-fuchsia-300">
                            <a className="selection:bg-fuchsia-300">
                                <div className="w-full flex flex-col bg-[white] 
                            rounded-md shadow-xl hover:md:shadow-2xl hover:md:scale-105 cursor-pointer">
                                    <div className="w-full h-[170px] rounded-t-md   relative">
                                        <Image src={list.image}
                                            className="object-cover rounded-t-md w-full h-full "
                                            layout="fill"
                                            blurDataURL="data:..."
                                            placeholder="blur"
                                            alt="logo" />
                                    </div>
                                    <div className="w-full p-5 space-y-5">
                                        <h1 className=" !mt-4 !mb-5 text-base font-medium text-center uppercase">
                                            {list.name}
                                        </h1>
                                        <p className="text-sm text-justify font-light text-secondary-black/90">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                        <hr className="border-primary-dark !mt-16"></hr>
                                        
                                                <h2 className="text-center !mt-5 text-primary-dark text-sm ">Veiw All</h2>
                                        
                                    </div>
                                </div>
                            </a>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
