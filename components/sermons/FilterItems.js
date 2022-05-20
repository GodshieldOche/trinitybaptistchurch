import { useEffect, useState } from 'react';

const FilterItems = ({ topics, preachers, scriptures }) => {

    // useEffect(() => {
    //     if (topics.length >= 1) {
    //         toggleShowless(1, preachers.length, scriptures.length)
    //     }
    //     if (preachers.length >= 5) {
    //         toggleShowless(topics.length, 5, scriptures.length)
    //     }
    //     if (scriptures.length >= 5) {
    //         toggleShowless(topics.length, preachers.length, 5)
    //     }
    // }, [])

    // const toggleShowless = (tValue, pValue, sValue) => { 
    //     topics.splice(0, tValue);
    //     preachers.splice(0, pValue);
    //     scriptures.splice(0, sValue);
    // }
    

    return (
        <div className="flex ml-3 md:ml-5 mt-3 flex-col transition duration-500 ease-in-out space-y-5">
            <div className="topics flex-col space-y-2 text-sm">
                <h1 className="uppercase font-medium">Topics</h1>
                <div className="ml-4 flex-col space-y-2">
                    {
                        topics.map((topic, index) => (
                            <div key={index} className="flex items-center space-x-1">
                                <div className="border cursor-pointer rounded w-4 h-4 border-primary-dark"></div>
                                <h1 className="capitalize font-light">{ topic }</h1>
                            </div>
                        ))
                    }
                    {
                        topics.length >= 5 && <h1 className="text-sm text-primary-dark">see more...</h1>
                    }
                </div>
            </div>

            <div className="preachers flex-col space-y-2 text-sm">
                <h1 className="uppercase font-medium">Preachers</h1>
                <div className="ml-4 flex-col space-y-2">
                    {
                        preachers.map((preacher, index) => (
                            <div key={index} className="flex items-center space-x-1">
                                <div className="border cursor-pointer rounded w-4 h-4 border-primary-dark"></div>
                                <h1 className="capitalize font-light">{preacher }</h1>
                            </div>
                        ))
                    }
                    {
                        preachers.length >= 5 && <h1 className="text-sm text-primary-dark">see more...</h1>
                    }
                </div>
            </div>

            <div className="scriptues flex-col space-y-2 text-sm">
                <h1 className="uppercase font-medium">Scriptures</h1>
                <div className="ml-4 flex-col space-y-2">
                    {
                        scriptures.map((scripture, index) => (
                            <div key={index} className="flex items-center space-x-1">
                                <div className="border cursor-pointer rounded w-4 h-4 border-primary-dark"></div>
                                <h1 className="capitalize font-light">{scripture}</h1>
                            </div>
                        ))
                    }
                    {
                        scriptures.length >= 5 && <h1 className="text-sm text-primary-dark">see more...</h1>
                    }
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
