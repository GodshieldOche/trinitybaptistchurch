import FilterItems from "./FilterItems"
import SortItems from "./SortItems"

const Filter = ({topics, preachers, scriptures, fitlerToggle, setFilterToggle, sortToggle, setSortToggle }) => {
    return (
        <div>
            <div className={` ${fitlerToggle || sortToggle ? "pb-5 pt-1  w-full min-h-screen fixed top-0 right-0  !z-50 !overflow-y-scroll !overscroll-contain" : "mb-5"}
            transition-all duration-500 ease-in-out lg:hidden  bg-[white]`}>
                <div className="grid grid-cols-2 items-center ">
                    <div className={`${fitlerToggle ? "text-[white] bg-primary-dark" : "bg-[white] text-[black]"}
                    w-full border cursor-pointer border-primary-dark/50  `}>
                        <h1 className="text-center  text-sm lg:text-xs  py-4 uppercase"
                            onClick={() => {
                                if (!sortToggle) {
                                    setFilterToggle(!fitlerToggle)
                                } else {
                                    setSortToggle(!sortToggle)
                                    setFilterToggle(!fitlerToggle)
                                }  
                                
                            }}>
                            filter</h1>
                    </div>
                    <div className={` ${sortToggle ? "bg-primary-dark text-[white]" : " bg-[white] text-[black] " } w-full cursor-pointer border border-primary-dark/50 `}>
                        <h1 className="text-center text-sm lg:text-xs py-4 uppercase"
                            onClick={() => {
                                if (!fitlerToggle) {
                                    setSortToggle(!sortToggle)
                                } else {
                                    setFilterToggle(!fitlerToggle)
                                    setSortToggle(!sortToggle)
                                }
                            }}> sort</h1>
                    </div>
                </div>

                {
                    fitlerToggle && <FilterItems setFilterToggle={setFilterToggle} fitlerToggle={fitlerToggle} topics={topics} preachers={preachers} scriptures={scriptures} />
                }
                {
                    sortToggle && <SortItems setSortToggle={setSortToggle}/>
                }
            </div>


            {/* Desktop Screen */}
            <div className="hidden lg:block bg-[white]">
                <div className="grid grid-cols-2 items-center shadow-md">
                    <div className={`${!sortToggle ? "bg-primary-dark text-[white]" : "bg-[white] text-[black]"}
                    w-full cursor-pointer border border-primary-dark/30 `}>
                        <h1 className="text-center text-sm lg:text-xs py-2 uppercase"
                            onClick={() => {
                                if (!sortToggle) {
                                    setFilterToggle(!fitlerToggle)
                                } else {
                                    setSortToggle(!sortToggle)
                                    setFilterToggle(!fitlerToggle)
                                }

                            }}>filter</h1>
                    </div>
                    <div className={`${sortToggle ? "bg-primary-dark text-[white]" : "bg-[white] text-[black]"}
                    w-full cursor-pointer border border-primary-dark/30`}>
                        <h1 className="text-center text-sm lg:text-xs py-2 uppercase"
                            onClick={() => {
                                if (!fitlerToggle) {
                                    setSortToggle(!sortToggle)
                                } else {
                                    setFilterToggle(!fitlerToggle)
                                    setSortToggle(!sortToggle)
                                }
                            }}>sort</h1>
                    </div>
                </div>

                {
                    fitlerToggle ? <FilterItems topics={topics} preachers={preachers} scriptures={scriptures} /> : sortToggle ? <SortItems /> : <FilterItems topics={topics} preachers={preachers} scriptures={scriptures} />
                }
            </div>
        </div>
        
    )
}

export default Filter
