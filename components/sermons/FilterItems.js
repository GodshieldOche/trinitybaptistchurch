import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { getAdminMinisters } from '../../redux/features/getMinisters';

const FilterItems = ({ setFilterToggle, fitlerToggle, topics, preachers, scriptures }) => {
    const dispatch = useDispatch();
    const { ministers } = useSelector(state => state.ministers);
    const router = useRouter();
    let pState = '';



    const [tValue, setTValue] = useState(5);
    const [sValue, setSValue] = useState(5);
    const [pValue, setPValue] = useState(5);
    const [tSelect, setTSelect] = useState(router.query?.topic ? router.query.topic : "");
    const [pSelect, setPSelect] = useState(router.query?.preacher ? pState : "");
    const [sSelect, setSSelect] = useState(router.query?.scripture ? router.query.scripture : "");

    
  

    useEffect(() => {
        ministers.map(minister => {
            if (minister._id == router.query.preacher) {
                console.log(minister.name)
                pState = minister.name
            }
        })
    }, [])


    const handleSubmit = (tSelect, pSelect, sSelect) => { 
        let preacher = ''
        let link = `${router.route}?sort=-date` 

        if (pSelect) {
            ministers.map(minister => {
                if (minister.name === pSelect) {
                    preacher = minister._id
                }
            })
        }

        if (tSelect) {
            link = link.concat(`&topic=${tSelect}`)
        }
        if (preacher) { 
            link = link.concat(`&preacher=${preacher}`)
        }
        if (sSelect) { 
            link = link.concat(`&scripture=${sSelect}`)
        }

        // console.log(preacher)
        router.push(link)

        if (fitlerToggle) {
            setFilterToggle(false)
        }
    }
    

    return (
        <div className="flex ml-3 md:ml-5 mt-3 flex-col transition duration-500 ease-in-out space-y-5">
            <div className="topics flex-col space-y-2 text-sm">
                <h1 className="uppercase font-medium">Topics</h1>
                <div className="ml-4 flex-col space-y-2">
                    {
                        topics.slice(0, tValue ).map((topic, index) => (
                            <div onClick={() => {
                                if(tSelect !== topic){
                                    setTSelect(topic)
                                } else {
                                    setTSelect('')
                                }
                                
                            }} key={index} className="flex items-center space-x-1">
                                <div className={`${tSelect === topic ? "bg-primary-dark" : ""} border cursor-pointer rounded w-4 h-4 border-primary-dark`}></div>
                                <h1 className="capitalize font-light">{ topic }</h1>
                            </div>
                        ))
                    }
                    {
                        topics.length > tValue && <button onClick={() => setTValue(topics.length)}
                            className="text-sm text-primary-dark">see more...</button >
                    }
                </div>
            </div>

            <div className="preachers flex-col space-y-2 text-sm">
                <h1 className="uppercase font-medium">Preachers</h1>
                <div className="ml-4 flex-col space-y-2">
                    {
                        preachers.slice(0, pValue).map((preacher, index) => (
                            <div onClick={() => {
                                if (pSelect !== preacher) {
                                    setPSelect(preacher)
                                } else {
                                    setPSelect('')
                                }
                            }} key={index} className="flex items-center space-x-1">
                                <div className={`${pSelect === preacher ? "bg-primary-dark" : ""}  border cursor-pointer rounded w-4 h-4 border-primary-dark`}></div>
                                <h1 className="capitalize font-light">{preacher }</h1>
                            </div>
                        ))
                    }
                    {
                        preachers.length >= pValue && <h1 onClick={() => setPValue(preachers.length)}
                            className="text-sm text-primary-dark">see more...</h1>
                    }
                </div>
            </div>

            <div className="scriptues flex-col space-y-2 text-sm">
                <h1 className="uppercase font-medium">Scriptures</h1>
                <div className="ml-4 flex-col space-y-2">
                    {
                        scriptures.slice(0, sValue).map((scripture, index) => (
                            <div onClick={() => {
                                    if (sSelect !== scripture) {
                                        setSSelect(scripture)
                                    } else {
                                        setSSelect('')
                                    }
                                }}     key={index} className="flex items-center space-x-1">
                                <div className={`${sSelect === scripture ? "bg-primary-dark" : ""} border cursor-pointer rounded w-4 h-4 border-primary-dark`}></div>
                                <h1 className="capitalize font-light">{scripture}</h1>
                            </div>
                        ))
                    }
                    {
                        scriptures.length >= sValue && <h1 onClick={() => setSValue(scriptures.length)}
                            className="text-sm text-primary-dark">see more...</h1>
                    }
                </div>
            </div>

            
            <div className="flex !mt-8 items-center space-x-3">
                <button
                    onClick={() => {
                        setTSelect('');
                        setPSelect('');
                        setSSelect('');
                    }}
                    disabled={tSelect == ''} className="py-1 px-3 uppercase text-[white] text-xs  bg-red-600 disabled:bg-red-300">Reset</button>
                <button
                    onClick={() => { handleSubmit(tSelect, pSelect, sSelect) }}
                    className="py-1 px-3 uppercase text-[white]  text-xs  bg-primary-light disabled:bg-primary-dark/60">Done</button>
            </div>
        </div>
    )
}

export default FilterItems
