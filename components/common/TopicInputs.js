import { useState, useEffect } from 'react'


const categories = [
    "select category", "christian life", "church & ministry", "family", "history & biography", "theology", "worldview & culture"
]

const christianLife = [
    "select topic", "christian thought", "life issues", "spiritual growth",
]

const churchMinistry = [
    "select topic", "trinity baptist church", "church leadership", "church life", "church practices", "outreach"
]

const family = [
    "select topic", "children", "dating & singleness", "divorce and remarriage", "husband and fathers", "manhood & womanhood", "marriage", "men", "parenting", "wives and mothers", "women"
]

const historyBiography = [
    "select topic", "auto biography", "church history"
]

const theology = [
    "select topic", "bible studies", "general theology", "god", "jesus christ", "holy spirit", "salvation", "sin",
]

const worldView = [
    "select topic", "apologetics", "arts & literature", "ethics", "worldview"
]




const TopicInputs = ({ setCategory, category, topic, setTopic}) => {
    const [selectTopic, setSelectTopic] = useState(['select topic'])
    const [hereCategory, setHereCategory] = useState('')
    const [hereTopic, setHereTopic] = useState('')


    useEffect(() => {
        if (category) {
            categories.map(cat => {
                if (cat === category) {
                    handleTopic(cat)
                   setHereCategory(cat)
               }
           })
        }
        if (topic) {
            selectTopic.map(top => {
                if(top === topic) {
                    setHereTopic(top)
                }
            })
        }
    }, [category, selectTopic])


    const handleTopic = (value) => {
        if (value === "christian life") {
            setSelectTopic(christianLife)
        } else if (value === "church & ministry") {
            setSelectTopic(churchMinistry)
        } else if (value === "family") {
            setSelectTopic(family)
        } else if (value === "history & biography") {
            setSelectTopic(historyBiography)
        } else if (value === "theology") {
            setSelectTopic(theology)
        } else if (value === "worldview & culture") {
            setSelectTopic(worldView)
        } else {
            setSelectTopic(['select topic'])
        }
    }






    return (
        <div className="space-y-2">
            <div className="flex space-x-2 w-full items-center">
                <div className="space-y-2 w-full">
                    <label htmlFor="name" className="ml-2 text-sm uppercase">Category</label>
                    <select
                        type="text"
                        name="category"
                        className="w-full capitalize text-gray-500 !px-1 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                        value={hereCategory}
                        onChange={(e) => {
                            setCategory(e.target.value)
                            setHereCategory(e.target.value)
                            handleTopic(e.target.value)
                        }}
                    >
                        {
                            categories.map(category => (
                                <option className="capitalize" key={category} value={category}>{category}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="space-y-2 w-full">
                    <label htmlFor="name" className="ml-2 text-sm uppercase">Topic</label>
                    <select
                        type="text"
                        name="topic"
                        className="w-full capitalize text-gray-500 !px-1 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                        value={hereTopic}
                        onChange={(e) => {
                            setHereTopic(e.target.value)
                            setTopic(e.target.value)
                        }}
                    >
                        {
                            selectTopic.map(item => (
                                <option className="capitalize" key={item} value={item}>{item}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default TopicInputs
