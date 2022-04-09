import FilterItems from "./FilterItems"
import SortItems from "./SortItems"

const Filter = ({ fitlerToggle, setFilterToggle, sortToggle, setSortToggle }) => {
    return (
        <div>
            <div className={` ${fitlerToggle || sortToggle ? "pb-5 pt-1 w-full h-screen fixed top-0 right-0  !z-50 !overflow-y-scroll" : ""}
            transition-all duration-500 ease-in-out lg:hidden  bg-[white]`}>
                <div className="grid grid-cols-2 items-center ">
                    <div className="w-full border cursor-pointer border-primary-dark/30 bg-primary-dark ">
                        <h1 className="text-center  text-sm lg:text-xs text-[white] py-2 uppercase"
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
                    <div className="w-full cursor-pointer border border-primary-dark/30 bg-[white]">
                        <h1 className="text-center text-sm lg:text-xs py-2 uppercase"
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
                    fitlerToggle && <FilterItems />
                }
                {
                    sortToggle && <SortItems />
                }
            </div>


            <div className="hidden lg:block bg-[white]">
                <div className="grid grid-cols-2 items-center shadow-md">
                    <div className="w-full cursor-pointer border border-primary-dark/30 bg-primary-dark ">
                        <h1 className="text-center text-sm lg:text-xs text-[white] py-2 uppercase"
                            onClick={() => {
                                if (!sortToggle) {
                                    setFilterToggle(!fitlerToggle)
                                } else {
                                    setSortToggle(!sortToggle)
                                    setFilterToggle(!fitlerToggle)
                                }

                            }}>filter</h1>
                    </div>
                    <div className="w-full cursor-pointer border border-primary-dark/30 bg-[white]">
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
                    fitlerToggle ? <FilterItems /> : sortToggle ? <SortItems /> : <FilterItems />
                }
            </div>
        </div>
        
    )
}

export default Filter
