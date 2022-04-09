const Filter = () => {
    return (
        <div className=" shadow-md ">
            <div className="grid grid-cols-2 items-center">
                <div className="w-full border border-primary-dark/30 bg-primary-dark ">
                    <h1 className="text-center text-sm lg:text-xs text-[white] py-2 uppercase">filter</h1>
                </div>
                <div className="w-full border border-primary-dark/30 bg-[white]">
                    <h1 className="text-center text-sm lg:text-xs py-2 uppercase">sort</h1>
                </div>
            </div>
        </div>
    )
}

export default Filter
