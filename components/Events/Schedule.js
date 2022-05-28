import {useEffect, useState} from 'react';
import { format } from 'date-fns'

const Schedule = ({ sessions, startDate, endDate }) => {
    const [dates, setDates] = useState([])
    const [schedules, setSchedules] = useState([])

    
    useEffect(() => {
        const e = new Date(endDate)
        const s = new Date(startDate)
        const diff = e.getTime() - s.getTime()
        const days = Math.round(diff / (1000 * 60 * 60 * 24) + 1)
        const start = s.getTime()
        setDates([])
        for (let i = 0; i < days; i++) {
            setDates(prev => [ ...prev, new Date(start + (1000 * 60 * 60 * 24) * (i)) ])
        }

        let subArr = []
        for (let i = 1; i <= days; i++){
            subArr.push([])
        }
        
        for (let i = 1; i <= days; i++) {
            sessions.map(session => {
                if (session.day.includes(i.toString())) {
                   subArr[i-1].push(session)
                }
            })
        }
        subArr.forEach(sub => {
            sub.sort((a, b) => new Date(a.startTime) - new Date(b.startTime))
        })
        setSchedules(subArr)
    }, [])


    return (
        <div>
            <div className=" px-2 md:px-0">
                {
                    schedules.map((subArr, index) => (
                        <div key={index}>
                            <h1 className="text-center text-sm text-primary-light uppercase font-medium">{`Day ${index + 1} - ${format(new Date(dates[index]), 'do MMM yyyy')} `}</h1>
                            {
                                subArr.map((session, i) => (
                                    <div key={session._id} className="!mb-5">
                                        <div className="flex flex-col space-y-3 py-5 border-b border-b-primary-light   ">
                                            <div className="flex space-x-1 items-center ">
                                                <h1 className="text-xs font-medium uppercase">{`Session ${i + 1} :`}</h1>
                                                <h1 className="text-xs uppercase">{`${format(new Date(session.startTime), 'h:mm a')} - ${format(new Date(session.endTime), 'h:mm a')} `}</h1>
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <h1 className="font-medium uppercase">{session.topic}</h1>
                                                <p className="font-light text-sm text-justify" >Matthew 16:18 promises that Jesus Christ is building His church and that the gates of hell will not prevail against it. Church history bears witness to this fact, as the saints in every age have stood for the gospel of God’s grace.</p>
                                            </div>
                                            {
                                                session.preacher.name && 
                                                <h1 className="text-[13px] capitalize">{`Speaker: ${session.preacher.name}`}</h1>
                                            }
                                        </div>
                                    </div >
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Schedule
