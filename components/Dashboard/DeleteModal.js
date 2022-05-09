import { useDispatch, useSelector } from "react-redux"
import { setDeletModalState } from "../../redux/features/menu"
import { useState, useEffect } from "react"
import { postDeleteMinister } from "../../redux/features/getMinisters"
import { postDeleteSermon } from "../../redux/features/sermons"
import { toast } from "react-toastify"
import ButtonLoader from "../common/ButtonLoader"
import { postDeleteBibleStudy } from "../../redux/features/bibleStudies"
import { postDeleteSeries } from "../../redux/features/series"
import { postDeleteSeriesSermon } from "../../redux/features/seriesDetails"
import { postDeleteConferenceSermon } from "../../redux/features/conference"
import { postDeleteConference } from "../../redux/features/conferences"


const DeleteModal = () => {
    const [name, setName] = useState('')
    const [data, setData] = useState('')
    const [dataName, setDataName] = useState('')
    const [loading, setLoading] = useState(false)
    const { deleteModalData } = useSelector(state => state.menu)

    useEffect(() => {
        // minister
        deleteModalData.minister && setDataName(deleteModalData.minister.name)
        deleteModalData.minister && setData(deleteModalData.minister)
        // sermon
        deleteModalData.sermon && setDataName(deleteModalData.sermon.title)
        deleteModalData.sermon && setData(deleteModalData.sermon)
        // bible study
        deleteModalData.study && setDataName(deleteModalData.study.title)
        deleteModalData.study && setData(deleteModalData.study)

        // sermon series 
        deleteModalData.serie && setDataName(deleteModalData.serie.title)
        deleteModalData.serie && setData(deleteModalData.serie)

        // series sermon
        deleteModalData.serm && setDataName(deleteModalData.serm.title)
        deleteModalData.serm && setData(deleteModalData.serm)

        // conference sermon 
        deleteModalData.sermc && setDataName(deleteModalData.sermc.title)
        deleteModalData.sermc && setData(deleteModalData.sermc)

        // conference
        deleteModalData.conference && setDataName(deleteModalData.conference.title)
        deleteModalData.conference && setData(deleteModalData.conference)
    }, [])
    const dispatch = useDispatch()

    const handleDelete = (id, index) => {
        setLoading(true)
        // minister
        if (deleteModalData.minister) { 
            dispatch(postDeleteMinister({ id, index })).then(result => {
                if (!result.error) {
                    setLoading(false)
                    toast.success("successfully deleted")
                    dispatch(setDeletModalState(false))
                } else {
                    console.log(result.error)
                }
            })
        }
        
        // sermon
        if (deleteModalData.sermon) {
            dispatch(postDeleteSermon({ id, index })).then(result => {
                if (!result.error) {
                    setLoading(false)
                    toast.success("successfully deleted")
                    dispatch(setDeletModalState(false))
                } else {
                    console.log(result.error)
                }
            })
        }

        // study
        if (deleteModalData.study) {
            dispatch(postDeleteBibleStudy({ id, index })).then(result => {
                if (!result.error) {
                    setLoading(false)
                    toast.success("successfully deleted")
                    dispatch(setDeletModalState(false))
                } else {
                    console.log(result.error)
                }
            })
        }

        // sermon series
        if (deleteModalData.serie) {
            dispatch(postDeleteSeries({ id, index })).then(result => {
                if (!result.error) {
                    setLoading(false)
                    toast.success("successfully deleted")
                    dispatch(setDeletModalState(false))
                } else {
                    console.log(result.error)
                }
            })
        }

        // series sermon
        if (deleteModalData.serm) {
            dispatch(postDeleteSeriesSermon({ sermonId: id, index, id:deleteModalData.id })).then(result => {
                if (!result.error) {
                    setLoading(false)
                    toast.success("successfully deleted series sermon")
                    dispatch(setDeletModalState(false))
                } else {
                    console.log(result.error)
                }
            })
        }

        // conference sermon
        if (deleteModalData.sermc) {
            dispatch(postDeleteConferenceSermon({ sermonId: id, index, id:deleteModalData.id })).then(result => {
                if (!result.error) {
                    setLoading(false)
                    toast.success("successfully deleted conference sermon")
                    dispatch(setDeletModalState(false))
                } else {
                    console.log(result.error)
                }
            })
        }

        // conference sermon
        if (deleteModalData.conference) {
            dispatch(postDeleteConference({ id, index })).then(result => {
                if (!result.error) {
                    setLoading(false)
                    toast.success("successfully deleted")
                    dispatch(setDeletModalState(false))
                } else {
                    console.log(result.error)
                }
            })
        }
       
    }   



    return (
         <div className="fixed w-full h-screen  top-0 bottom-0 left-0 right-0 overflow-y-hidden overscroll-y-none bg-gray-900/90 z-50 ">

            <div className="flex w-full h-full justify-center items-center">
                <div 
                onClick={(e) => e.stopPropagation()}
                className="flex flex-col space-y-5 max-w-screen-sm mx-auto h-[280px] w-full !px-5 !py-5 relative rounded-2xl bg-white">
                    <h1 className="uppercase text-xl font-semibold text-red-700 text-center">delete</h1>
                    <form autoComplete="off" className="flex flex-col space-y-4 w-full items-center justify-start">
                        <h1> Are you sure you want to delete <span className="font-bold">{`${dataName}`}</span>?  </h1>
                        <div className=" w-full flex flex-col space-y-5">
                                <label htmlFor="title" className="w-full font-medium text-center  text-sm uppercase">Enter Name to Confirm</label>
                                <input
                                    type="title"
                                    name="title"
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    required
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                        </div>
                    </form>
                    <div className="absolute bottom-2 left-0 right-0 flex  items-center justify-around w-full !mb-3 ">
                        <h1
                            onClick={() => { dispatch(setDeletModalState(false)) }}
                            className="cursor-pointer text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-blue-600">
                            cancel
                        </h1>
                        <button
                        onClick={() => handleDelete(data._id, deleteModalData.index)}
                            disabled={name !== dataName } className="text-center text-white py-1.5 rounded-md text-sm disabled:bg-red-400  px-7 uppercase bg-red-600">
                            {
                                loading ? <ButtonLoader /> : "delete"
                            }
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default DeleteModal
