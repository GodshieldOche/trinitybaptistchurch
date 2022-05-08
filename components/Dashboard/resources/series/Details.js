import { useState, useEffect, } from 'react';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../../../common/Loader';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageUploader from '../../../common/ImageUploader';
import ButtonLoader from '../../../common/ButtonLoader';
import { getSeriesDetails, updateSeries } from '../../../../redux/features/seriesDetails';
import { setDeleteModalData, setDeletModalState } from '../../../../redux/features/menu'


const Details = ({ name }) => {
    const [imageUrl, setImageUrl] = useState('')
    const [imagePreview, setImagePreview] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [buttonLoad, setButtonLoad] = useState(false)

    const router = useRouter();
    const { loading, seriesDetails, message } = useSelector(state => state.seriesDetails)
    const dispatch = useDispatch();
    const { id } = router.query;

    useEffect(() => {
        dispatch(getSeriesDetails(id)).then(result => {
            if (!result.error) {
                const { title, description, imageUrl } = result.payload.series
                setTitle(title)
                setDescription(description)
                setImageUrl(imageUrl)
                setImagePreview(imageUrl.url)
            } else {
                console.log(result.error)
            }
        })

    }, []);


    const handleSubmit = (e) => {
        e.preventDefault()
        if (title && description && imageUrl) { 
            if (title !== seriesDetails.title || description !== seriesDetails.description || imageUrl !== seriesDetails.imageUrl) {
                setButtonLoad(true)
                dispatch(updateSeries({id, title, description, imageUrl })).then(result => {
                    if (!result.error) { 
                        setButtonLoad(false)
                        toast.success('Series updated successfully')
                        router.back()
                    } else {
                        setButtonLoad(false)
                        toast.error('Something went wrong')
                        console.log(result.error)
                    }
                })
            } else {
                toast.info('Nothing to update')
            }
        }
        
       
    }

    


  return (
      <div className="flex  w-full min-h-screen  my-2  mx-2 rounded-2xl bg-white">
          <div className="w-full flex flex-col space-y-7  h-fit items-center  pt-5 px-3">
              <h1 className="uppercase text-lg text-primary-dark font-medium">{`${name}`}</h1>
              <form className="w-full" autoComplete="off">
                  <div className="w-full h-full grid grid-cols-12 items-center gap-5">
                      <div className="col-span-7 space-y-5 w-full text-gray-700 ">
                          {/* title */}
                          <div className="space-y-2">
                              <label htmlFor="title" className="ml-2 text-sm uppercase">{`${name} title`}</label>
                              <input
                                  type="title"
                                  name="title"
                                  className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                  required
                                  value={title}
                                  onChange={(e) => { setTitle(e.target.value.toLowerCase()) }}
                              />
                          </div>
                          {/* Description */}
                          <div className="w-full space-y-2">
                              <label htmlFor="description" className="ml-2 text-sm uppercase">{`${name} description`}</label>
                              <textarea
                                  className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                  rows={`${name === "series" ? "8" : "10"}`}
                                  value={description}
                                  onChange={(e) => { setDescription(e.target.value.toLowerCase()) }}
                              >
                              </textarea>
                          </div>
                      </div>
                      <div className="col-span-5 space-y-5 w-full text-gray-700 ">
                          {/* date pickker */}
                          {
                              name === "conference"
                              &&
                              <div className="space-y-2 w-full">
                                  <label htmlFor="name" className="ml-2 text-sm uppercase">Conference Date</label>
                                  <DatePicker
                                      selectsRange={true}
                                      startDate={startDate}
                                      endDate={endDate}
                                      className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                      onChange={(update) => {
                                          setDateRange(update);
                                      }}
                                      isClearable={true}
                                  />
                              </div>
                          }

                          {/* image upload */}
                          <ImageUploader imagePreview={imagePreview} setImagePreview={setImagePreview} setImageUrl={setImageUrl} imageUrl={imageUrl} height={"h-52"} />
                      </div>
                  </div>
              </form>
              <div className="w-full flex flex-col space-y-7 items-center justify-center">
                  <div className="w-full flex items-center justify-between px-3">
                      <h1 className="uppercase text-lg font-medium">{`${name} sermons`}</h1>
                      <button
                          onClick={() => {
                              router.push(`/admin/resources/series/sermon?id=${id}`)
                          }}
                        className="uppercase  text-sm text-white rounded-md py-2 px-4 bg-primary-dark">Add sermon</button>
                  </div>
                  {
                      loading ? <Loader />
                          :
                          <table className="w-full max-w-full table-auto border-collapse ">
                              <thead className="bg-gray-800 text-gray-200 ">
                                  <tr className="">
                                      <th scope="col" className="text-sm font-medium uppercase px-4 py-4 text-left">
                                          #
                                      </th>
                                      <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                          Title
                                      </th>
                                      <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                          Preacher
                                      </th>
                                      <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                          Date
                                      </th>
                                      <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                          Actions
                                      </th>
                                  </tr>
                              </thead>
                              <tbody className="bg-white  ">
                                  {
                                      seriesDetails?.sermons?.map((serm, index) => (
                                          <tr key={serm._id} className={` transition duration-300 ease-in-out border-b border-b-gray-200`}>

                                              <td className="px-4 py-4 whitespace-nowrap text-sm  ">
                                                  <h1>{index + 1}</h1>
                                              </td>
                                              <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                                  <h1 className="capitalize">{ serm.title }</h1>
                                              </td>
                                              <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                                  <h1 className="capitalize">{serm.preacher.name}</h1>
                                              </td>
                                              <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                                  <h1 className="capitalize">Feb. 13th, 2022</h1>
                                              </td>
                                              <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                                                  <div className="flex space-x-2 items-center">
                                                      <div
                                                          onClick={() => {
                                                              router.push(`/admin/resources/series/sermon/${index}?id=${id}`)
                                                          }}
                                                          className="flex justify-center items-center cursor-pointer hover:bg-primary-dark bg-primary-dark/90 w-7 h-7 rounded-full">
                                                          <EditIcon className="!text-white !text-base" />
                                                      </div>
                                                      <div
                                                          onClick={() => {
                                                              dispatch(setDeleteModalData({ serm, id, index }))
                                                              dispatch(setDeletModalState(true))
                                                          }}
                                                          className="flex justify-center items-center cursor-pointer hover:bg-red-600 bg-red-600/90 w-7 h-7 rounded-full">
                                                          <DeleteIcon className="!text-white !text-base" />
                                                      </div>
                                                  </div>
                                              </td>

                                          </tr>
                                      ))
                                  }
                              </tbody>
                          </table>
                  }   
              </div>
              <div className="flex items-center justify-between w-full !mb-3">
                  <h1
                      onClick={() => { router.back() }}
                      className="cursor-pointer text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-red-700">
                      cancel
                  </h1>
                  <button onClick={handleSubmit} className="text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-blue-600">
                      {
                          buttonLoad ? <ButtonLoader /> : "update"
                      }
                  </button>
              </div>

          </div>
      </div>
  )
}

export default Details