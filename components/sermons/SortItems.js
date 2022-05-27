import { useRouter } from 'next/router'

const SortItems = ({ setSortToggle }) => {
    const router = useRouter()
    const sort = router.query.sort || "newest"

    const handleSort = (key) => {
        router.push(`${router.route}?page=1&sort=${key}`)
        setSortToggle && setSortToggle(false)
    }


    return (
        <div className="flex ml-3 md:ml-5 mt-3 flex-col transition duration-500 ease-in-out space-y-5">
            <div className="topics flex-col space-y-2 text-sm">
                <h1 className="uppercase font-medium">sort by</h1>
                <div className="ml-4 flex-col space-y-2">
                    <div className="flex items-center space-x-1">
                        <div
                            onClick={() => handleSort("newest")}
                            className={`${sort === "newest" ? "bg-primary-dark" : ""} 
                            border cursor-pointer rounded w-4 h-4 border-primary-dark`}></div>
                        <h1 className="capitalize font-light">newest</h1>
                    </div>
                    <div className="flex items-center space-x-1">
                        <div 
                            onClick={() => handleSort("oldest")}
                            className={`${sort === "oldest" ? "bg-primary-dark" : ""}
                            border cursor-pointer rounded w-4 h-4 border-primary-dark`}></div>
                        <h1 className="capitalize font-light">Oldest</h1>
                    </div>
                    <div className="flex items-center space-x-1">
                        <div
                            onClick={() => handleSort("a-z")}
                            className={`${sort === "a-z" ? "bg-primary-dark" : ""}
                            border cursor-pointer rounded w-4 h-4 border-primary-dark`}></div>
                        <h1 className="capitalize font-light">Alphabet: A-Z</h1>
                    </div>
                    <div className={`flex items-center space-x-1`}>
                        <div
                            onClick={() => handleSort("z-a")}
                            className={`${sort === "z-a" ? "bg-primary-dark" : ""} border cursor-pointer rounded w-4 h-4 border-primary-dark`}></div>
                        <h1 className="capitalize font-light">Alphabet: Z-A</h1>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default SortItems
