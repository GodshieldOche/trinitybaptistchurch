import Image from "next/image"
import { format } from 'date-fns'
import About from "../common/About"


const Body = ({ resource }) => {
    return (
        <div className="max-w-screen-sm mx-auto px-2 md:px-0 ">
            <div className="flex flex-col space-y-3 w-full">
                <h1 className="text-xs text-center font-light uppercase">{format(new Date(resource.date), 'do MMM yyyy')}</h1>
                <h1 className="text-xl md:text-3xl font-medium text-center uppercase">{ resource.title }</h1>
                
                <div className="flex font-light uppercase text-sm space-x-2 justify-center">
                    <div className="flex items-center space-x-2 justify-center">
                        <h1 className=" ">Scripture:</h1>
                        <h1 className=" ">{`${resource.book} ${resource.chapter}:${resource.verse}`}</h1>
                    </div>
                    <span>|</span>
                    <div className="flex items-center space-x-2 justify-center">
                        <h1 className=" ">Speaker:</h1>
                        <h1 className=" ">{resource.preacher.name}</h1>
                    </div>
                </div>
                
                <div className="flex flex-col !mt-10 !mb-12 space-y-3">
                    <h1 className="mx-1 text-sm lg:text-base uppercase">About the message</h1>
                    <p className="md:text-lg md:leading-8 text-gray-700 font-light text-justify px-1">
                        {resource.description}
                    </p>
                </div>
                <About preacher={resource.preacher} />
               
            </div>
        </div>
    )
}

export default Body
