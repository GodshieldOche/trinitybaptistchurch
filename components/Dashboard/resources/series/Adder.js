import { useState, useEffect, } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ImageUploader from "../../../common/ImageUploader";
import { useRouter } from 'next/router';
import AudioUploader from '../../../common/AudioUploader';
import { useSelector, useDispatch } from 'react-redux';
import { getAdminMinisters } from '../../../../redux/features/getMinisters';
import TopicInputs from '../../../common/TopicInputs';
import { toast } from 'react-toastify';
import ButtonLoader from '../../../common/ButtonLoader';
import { postSermonSeries, getSeriesDetails, postUpdateSeriesSermon } from '../../../../redux/features/seriesDetails';



const Adder = ({ name }) => {
    const [imagePreview, setImagePreview] = useState('')
    const [title, setTitle] = useState('')
    const [topic, setTopic] = useState([])
    const [category, setCategory] = useState('')
    const [date, setDate] = useState(new Date());
    const [imageUrl, setImageUrl] = useState('')
    const [audioUrl, setAudioUrl] = useState();
    const [preacherName, setPreacherName] = useState('');
    const [book, setBook] = useState('');
    const [chapter, setChapter] = useState('');
    const [verse, setVerse] = useState('');
    const [description, setDescription] = useState('');
    const [youtubeLink, setYoutubeLink] = useState('');
    const [loading, setLoading] = useState(false);


    const { ministers } = useSelector(state => state.ministers)
    const { seriesDetails } = useSelector(state => state.seriesDetails)
    const dispatch = useDispatch();
    const router = useRouter();
    const { id, index } = router.query; 

    useEffect(() => {
        dispatch(getAdminMinisters())
        if (name === 'series sermon Details') { 
            dispatch(getSeriesDetails(id)).then(result => {
                if (!result.error) {
                    const { title, category, topic, preacher, book, chapter, verse,
                        date, description, imageUrl, audioUrl, youtubeLink } = result.payload.series.sermons[index]
                    setTitle(title)
                    setTopic(topic)
                    setCategory(category)
                    setPreacherName(preacher?.name)
                    setBook(book)
                    setChapter(chapter)
                    setVerse(verse)
                    setDate(new Date(date))
                    setDescription(description)
                    setImagePreview(imageUrl?.url || '')
                    setImageUrl(imageUrl)
                    setAudioUrl(audioUrl)
                    setYoutubeLink(youtubeLink)
                } else {
                    console.log(result.error)
                }
            })
        }
    }, []);

    const handleSubmit = (e) => { 
        e.preventDefault()
        if (title && topic && category && date && preacherName && book && chapter && verse && description && audioUrl) {
            let preacher = ''
            ministers.forEach(minister => {
                if (minister.name === preacherName) {
                    preacher = minister._id
                }
            })
            setLoading(true)

            name === "add series sermon" && dispatch(postSermonSeries({
                id, title, category, topic, preacher,
                book, chapter, verse, date, description, imageUrl, audioUrl, youtubeLink
            })).then(result => {
                if (!result.error) {
                    setLoading(false)
                    toast.success('Sermon Added successfully')
                    router.back()
                } else {
                    setLoading(false)
                    console.log(result.error)
                }

            })

            if (name === "series sermon Details") {
                const sermon = seriesDetails.sermons[index]

                if (title !== sermon.title || category !== sermon.category || topic !== sermon.topic || preacherName !== sermon.preacher?.name || book !== sermon.book || chapter !== sermon.chapter || verse !== sermon.verse || date !== sermon.date || description !== sermon.description || imageUrl !== sermon.imageUrl || audioUrl !== sermon.audioUrl || youtubeLink !== sermon.youtubeLink) {
                    dispatch(postUpdateSeriesSermon({
                        id, sermonId: sermon._id, title, category, topic, preacher,
                        book, chapter, verse, date, description, imageUrl, audioUrl, youtubeLink
                    })).then(result => {
                        if (!result.error) {
                            setLoading(false)
                            toast.success('Sermon Updated successfully')
                            router.back()
                        } else {
                            setLoading(false)
                            console.log(result.error)
                        }
                    })
                } else {
                    setLoading(false)
                    toast.info('Nothing to update')
                }
            }
            
        } else {
            toast.error('Please fill all the required fields')
        }
    }
    

    

  return (
      <div className="flex  w-full min-h-screen  my-2  mx-2 rounded-2xl bg-white">
          <div className="w-full flex flex-col h-fit space-y-4 items-center  pt-5 px-3 ">
              <h1 className="uppercase text-lg text-primary-dark font-medium">{`${name} `}</h1>
              <form onSubmit={handleSubmit} className="w-full space-y-8" autoComplete="off">
                  <div className="w-full h-full grid grid-cols-12 gap-5">
                      <div className="col-span-7 space-y-5 w-full text-gray-700 ">
                          {/* sermon title */}
                          <div className="space-y-2">
                              <label htmlFor="title" className="ml-2 text-sm uppercase">title</label>
                              <input
                                  type="title"
                                  name="title"
                                  className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                  required
                                  value={title}
                                  onChange={(e) => { setTitle(e.target.value.toLowerCase()) }}
                              />
                          </div>

                          <TopicInputs topic={topic} setTopic={setTopic} category={category} setCategory={setCategory} />
                          
                          {/* scripture */}
                          <div className="grid grid-cols-12 items-center gap-2">
                              <div className="col-span-6 space-y-2">
                                  <label htmlFor="book" className="ml-2 text-sm uppercase">Book</label>
                                  <input
                                      type="book"
                                      name="book"
                                      className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                      required
                                      value={book}
                                      onChange={(e) => { setBook(e.target.value.toLowerCase()) }}
                                  />
                              </div>
                              <div className="col-span-3 space-y-2">
                                  <label htmlFor="book" className="ml-2 text-sm uppercase">Chapter</label>
                                  <input
                                      type="chapter"
                                      name="chapter"
                                      className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                      required
                                      value={chapter}
                                      onChange={(e) => { setChapter(e.target.value.toLowerCase()) }}
                                  />
                              </div>
                              <div className="col-span-3 space-y-2">
                                  <label htmlFor="verse" className="ml-2 text-sm uppercase">Verses</label>
                                  <input
                                      type="verse"
                                      name="verse"
                                      className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                      required
                                      value={verse}
                                      onChange={(e) => { setVerse(e.target.value.toLowerCase()) }}
                                  />
                              </div>
                          </div>

                          {/* Date/preacher*/}
                          <div className="space-y-2">

                              <div className="grid grid-cols-12 gap-2 w-full items-center">
                                  <div className="col-span-7 space-y-2 w-full">
                                      <label htmlFor="name" className="ml-2 text-sm uppercase">Preacher</label>
                                      <select
                                          type="text"
                                          name="category"
                                          className="w-full capitalize text-gray-500 !px-1 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                          value={preacherName}
                                          onChange={(e) => {
                                              setPreacherName(e.target.value)
                                          }}
                                      >
                                          {
                                              ministers && [{ name: "select preacher", _id: 1 }, ...ministers].map(minister => (
                                                  <option className="capitalize" key={minister._id} value={minister.name}>{minister.name}</option>
                                              ))
                                          }
                                      </select>
                                  </div>
                                  <div className="col-span-5 space-y-2 w-full">
                                      <label htmlFor="name" className="ml-2 text-sm uppercase">Date</label>
                                      <DatePicker
                                          closeOnScroll={true}
                                          selected={date}
                                          className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                          onChange={(date) => setDate(date)}
                                      />
                                  </div>
                              </div>

                          </div>

                          {/* Description */}
                          <div className="w-full space-y-2">
                              <label htmlFor="description" className="ml-2 text-sm uppercase">description</label>
                              <textarea
                                  className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                  rows="4"
                                  value={description}
                                  onChange={(e) => { setDescription(e.target.value) }}
                              ></textarea>
                          </div>
                      </div>
                      <div className="col-span-5 space-y-5 w-full text-gray-700 ">
                          {/* image upload */}
                          <ImageUploader imagePreview={imagePreview} setImagePreview={setImagePreview} setImageUrl={setImageUrl} imageUrl={imageUrl} height={"h-44"} />
                          {/* youtube video link */}
                          <div className="space-y-2 w-full">
                              <div className="space-y-2">
                                  <label htmlFor="title" className="ml-2 text-sm uppercase">
                                      Youtube video link <span className="capitalize text-primary-dark text-xs font-light">(optional)</span>
                                  </label>
                                  <input
                                      type="link"
                                      name="link"
                                      className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                      value={youtubeLink}
                                      onChange={(e) => { setYoutubeLink(e.target.value) }}
                                  />
                              </div>
                          </div>
                          {/* audio upload */}
                          <AudioUploader audioUrl={audioUrl} setAudioUrl={setAudioUrl} />
                      </div>
                  </div>
                  <div className="flex items-center justify-between w-full !mt-5 mb-3">
                      <h1
                          onClick={() => { router.back() }}
                          className="cursor-pointer text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-red-700">
                          cancel
                      </h1>
                      <button type="submit" className="text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-blue-600">
                          {
                              loading ? <ButtonLoader /> : name === "add series sermon" ? "create" : "update"
                          }
                      </button>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default Adder