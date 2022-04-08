import Image from "next/image"

const Categories = () => {

    const lists = [
        {
            name: "Sermons",
            image: "/img/sermons.jpg",
            id: 1
        },
        {
            name: "Preaching Series",
            image: "/img/series.jpg",
            id: 2
        },
        {
            name: "Conference Messages",
            image: "/img/conference.jpg",
            id: 3
        },
        {
            name: "Articles",
            image: "/img/article.jpg",
            id: 4
        },
        {
            name: "Bible Study",
            image: "/img/bible.jpg",
            id: 5
        },
    ]
    return (
        <div className="container !mt-20 lg:px-[2rem] space-y-5">
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
                                <h2 className="text-center text-primary-dark text-sm ">Veiw All</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Categories
