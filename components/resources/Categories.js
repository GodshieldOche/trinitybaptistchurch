import Image from "next/image"
import Link from "next/link"

const Categories = () => {

    const lists = [
        {
            name: "sermons",
            image: "/img/sermons.jpg",
            id: 1
        },
        {
            name: "preaching series",
            image: "/img/series.jpg",
            id: 2
        },
        {
            name: "conference messages",
            image: "/img/conference.jpg",
            id: 3
        },
        {
            name: "articles",
            image: "/img/article.jpg",
            id: 4
        },
        {
            name: "bible study",
            image: "/img/bible.jpg",
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
                      
                        <div key={list.id} className="w-full flex flex-col bg-[white]
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
                                <h1 className=" !mt-4 !mb-5 text-base text-center uppercase">
                                    {list.name}
                                </h1>
                                <p className="text-sm text-justify font-light text-secondary-black/90">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                <hr className="border-primary-dark !mt-16"></hr>
                                <Link href={`/${list.name}`}>
                                    <a>
                                        <h2 className="text-center !mt-5 text-primary-dark text-sm ">Veiw All</h2>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
