const FilterItems = () => {

    const items = [
        {
            name: "The Person Of Christ",
            id: 1
        },
        {
            name: "Miracles",
            id: 2
        },
        {
            name: "The Parables",
            id: 3
        },
        {
            name: "The Atonement",
            id: 4
        },
        {
            name: "The Trinity",
            id: 5
        },
    ]
    const preachers = [
        {
            name: "Peter Abutu",
            id: 1
        },
        {
            name: "Eleazar Maduka",
            id: 2
        },
        {
            name: "Oche Chidi",
            id: 3
        },
    ]
    const scriptures = [
        {
            name: "John",
            id: 1
        },
        {
            name: "Romans",
            id: 2
        },
        {
            name: "1 John",
            id: 3
        },
        {
            name: "Jonah",
            id: 4
        },
        {
            name: "philippians",
            id: 5
        },
    ]

    return (
        <div className="flex ml-3 md:ml-5 mt-3 flex-col transition duration-500 ease-in-out space-y-5">
            <div className="topics flex-col space-y-2 text-sm">
                <h1 className="uppercase font-medium">Topics</h1>
                <div className="ml-4 flex-col space-y-2">
                    {
                        items.map(item => (
                            <div key={item.id} className="flex items-center space-x-1">
                                <div className="border cursor-pointer rounded w-4 h-4 border-primary-dark"></div>
                                <h1 className="capitalize font-light">{ item.name }</h1>
                            </div>
                        ))
                    }
                    <h1 className="text-sm text-primary-dark">see more...</h1>
                </div>
            </div>

            <div className="preachers flex-col space-y-2 text-sm">
                <h1 className="uppercase font-medium">Preachers</h1>
                <div className="ml-4 flex-col space-y-2">
                    {
                        preachers.map(item => (
                            <div key={item.id} className="flex items-center space-x-1">
                                <div className="border cursor-pointer rounded w-4 h-4 border-primary-dark"></div>
                                <h1 className="capitalize font-light">{ item.name }</h1>
                            </div>
                        ))
                    }
                    
                    
                </div>
            </div>

            <div className="scriptues flex-col space-y-2 text-sm">
                <h1 className="uppercase font-medium">Scriptures</h1>
                <div className="ml-4 flex-col space-y-2">
                    {
                        scriptures.map(item => (
                            <div key={item.id} className="flex items-center space-x-1">
                                <div className="border cursor-pointer rounded w-4 h-4 border-primary-dark"></div>
                                <h1 className="capitalize font-light">{ item.name }</h1>
                            </div>
                        ))
                    }
                    <h1 className="text-sm text-primary-dark">see more...</h1>
                </div>
            </div>

            
            <div className="flex !mt-8 items-center space-x-3">
                <button disabled={true} className="py-1 px-3 uppercase text-[white] text-xs  bg-primary-light/60">Reset</button>
                <button className="py-1 px-3 uppercase text-[white]  text-xs  bg-primary-dark">Done</button>
            </div>
        </div>
    )
}

export default FilterItems
