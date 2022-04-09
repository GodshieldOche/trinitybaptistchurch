import FilterItems from "./FilterItems"

const Filter = ({ fitlerToggle, setFilterToggle }) => {
    return (
        <div>
            <div className={` ${fitlerToggle ? "pb-5 pt-1 w-full h-screen fixed top-0 right-0  !z-50 !overflow-y-scroll" : ""}
            transition-all duration-500 ease-in-out lg:hidden  bg-[white]`}>
                <div className="grid grid-cols-2 items-center ">
                    <div className="w-full border cursor-pointer border-primary-dark/30 bg-primary-dark ">
                        <h1 className="text-center  text-sm lg:text-xs text-[white] py-2 uppercase"
                            onClick={() => setFilterToggle(!fitlerToggle)}>
                            filter</h1>
                    </div>
                    <div className="w-full cursor-pointer border border-primary-dark/30 bg-[white]">
                        <h1 className="text-center text-sm lg:text-xs py-2 uppercase">sort</h1>
                    </div>
                </div>

                {
                    fitlerToggle && <FilterItems />
                }
            </div>


            <div className="hidden lg:block bg-[white]">
                <div className="grid grid-cols-2 items-center shadow-md">
                    <div className="w-full cursor-pointer border border-primary-dark/30 bg-primary-dark ">
                        <h1 className="text-center text-sm lg:text-xs text-[white] py-2 uppercase">filter</h1>
                    </div>
                    <div className="w-full cursor-pointer border border-primary-dark/30 bg-[white]">
                        <h1 className="text-center text-sm lg:text-xs py-2 uppercase">sort</h1>
                    </div>
                </div>

                <FilterItems />
                {/* py-5 w-full h-screen fixed top-0 right-0  !z-50 !overflow-y-scroll */}
            </div>
        </div>
        
    )
}

export default Filter
