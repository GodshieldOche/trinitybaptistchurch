import Image from 'next/image'
import Introduction from './Introduction'
import NavLink from './NavLink'
import Schedule from './Schedule'
import Speakers from './Speakers'
import { useState } from 'react'
import Register from './Register'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import blur from '../common/blur'



const Body = () => {
    const [active, setActive] = useState('introduction')

    const { event } = useSelector(state => state.clientEvent)

    const toggleActive = (name) => {
        if (active !== name) {
            setActive(name)
        }
    }

    const date = (start, end) => {
        if (start === end) {
            return format(new Date(start), 'MMM, do yyyy')
        } else {
            return `${format(new Date(start), 'do')} - ${format(new Date(end), 'do MMM yyyy')}`
        }
    }

    
    return (
        <div>
            <div className="bg-[#eee]/60 sm:!pt-20 !pt-[60px] !mb-3  !pb-5">
                <div className="max-w-screen-sm mx-auto ">
                    <div className="flex flex-col space-y-3 w-full">
                        <div className="w-full h-[250px] sm:h-[300px] relative">
                            <Image src="https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651307275/Global/conference_eojsyc.jpg"
                                className="object-cover w-full h-full"
                                layout="fill"
                                blurDataURL={blur}
                                placeholder="blur"
                                alt="logo" />
                        </div>
                        <div className="flex flex-col space-y-2 items-center justify-center">
                            <h1 className="text-xs uppercase">{event.type}</h1>
                            <h1 className="text-xl md:text-3xl font-medium uppercase">{event.title}</h1>
                            <h1 className="text-sm capitalize">{date(event.startDate, event.endDate)}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-sm mx-auto mt-2 space-y-8 ">
                <div className="flex w-full overflow-x-auto overscroll-contain box-border justify-between font-medium space-x-3 px-2 md:px-0 py-2 border-b border-b-primary-dark ">
                    <NavLink name={"introduction"} toggleActive={toggleActive} active={active} />
                    <NavLink name={"speakers"} toggleActive={ toggleActive} active={active}/>
                    <NavLink name={"schedule"} toggleActive={toggleActive} active={active}/>
                    <NavLink name={"register"} toggleActive={toggleActive} active={active} />
                </div>
                {
                    active === 'introduction' && <Introduction int={event.description} />
                }
                {
                    active === 'speakers' && <Speakers speakers={event.sessions} />
                }
                {
                    active === 'schedule' && <Schedule sessions={event.sessions} startDate={event.startDate} endDate={event.endDate} />
                }  
                {
                    active === 'register' && <Register conference={event._id} />
                }  
            </div>
        </div>
    )
}

export default Body
