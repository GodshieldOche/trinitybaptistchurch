import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchAllResources } from '../../redux/features/client/latest'
import { useRouter } from 'next/router'
import Image from 'next/image'
import blur from '../common/blur'
import Loader from '../common/Loader'
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import Link from "next/link"
import { format } from 'date-fns'
import { Pagination } from '../common/Pagination'


const defaultImage = "https://res.cloudinary.com/dk6uhtgvo/image/upload/v1651307278/Global/sermons_nbw4cx.jpg"

const Search = () => {
    const { loading, searchResults, resPerPage, totalItems } = useSelector(state => state.latest)
    const dispatch = useDispatch()
    const router = useRouter()

    const { keyword } = router.query

    const page = Number(router.query.page) || 1

    useEffect(() => {
        dispatch(searchAllResources({keyword, page}))
    }, [keyword, page])
    
    return (
        <div>
            <div className="mt-[100px] min-h-screen  container md:px-0 lg:px-[2rem] !mb-20 sm:mt-24 w-full">
                <div className="max-w-screen-md space-y-8 mx-auto px-2 md:px-0">
                    <h1 className="text-center uppercase text-xs md:text-sm ">
                        {`${totalItems > 1 ? totalItems + " Results" : totalItems + " Result"} for "${keyword}" - Page 1`}
                    </h1>
                    <div className="flex flex-col justify-center mt-2 md:mt-5 space-y-3">
                        {
                        loading ? <Loader /> : searchResults.length > 0 ?
                            searchResults.map(sermon => (
                                <div
                                    onClick={() => {
                                        sermon.category ?
                                            router.push(`/resources/sermons/${sermon._id}`)
                                            : sermon.conferenceId ?
                                                router.push(`/resources/conference/${sermon.conferenceId}?index=${sermon.index}`)
                                                : sermon.seriesId ?
                                                    router.push(`/resources/series/${sermon.seriesId}?index=${sermon.index}`)
                                                    : router.push(`/resources/biblestudy/${sermon._id}`)

                                    }}
                                    key={sermon._id}
                                    className="flex py-3 hover:bg-secondary-one/20 cursor-pointer items-center justify-between space-x-2 px-2 border-b border-b-primary-black/10">
                                    <div className="flex flex-col space-y-2">
                                        <div className="flex space-x-1">
                                            <GraphicEqIcon className="text-[orange] !text-base" />
                                            <OndemandVideoIcon className="text-[red]/80 !text-base" />
                                            <h1 className="text-xs uppercase font-light ">{'|  ' + format(new Date(sermon.date), 'do MMM yyyy')}</h1>
                                        </div>
                                        <h1 className=" text-base md:text-lg capitalize ">{sermon.title}</h1>
                                        <h1 className="font-light text-sm capitalize ">{`${sermon.book} ${sermon.chapter}:${sermon.verse}`}</h1>
                                        <div className="flex items-center !mt-3 space-x-2">
                                            <div className="h-[25px] w-[25px] rounded-full relative">
                                                <Image src={sermon.preacher.imageUrl.url}
                                                    className="object-cover w-full h-full rounded-full"
                                                    layout="fill"
                                                    blurDataURL={blur}
                                                    placeholder="blur"
                                                    alt="logo" />
                                            </div>
                                            <h1 className="text-sm  font-light">{sermon.preacher?.name}</h1>
                                        </div>
                                    </div>
                                    <div className="w-[70px] h-[75px] rounded-lg  relative">
                                        <Image src={sermon?.imageUrl?.url ? sermon.imageUrl.url : defaultImage}
                                            className="object-cover rounded-lg w-full h-full "
                                            layout="fill"
                                            blurDataURL={blur}
                                            placeholder="blur"
                                            alt="logo" />
                                    </div>
                                </div>
                            ))
                            : <h1 className="text-center uppercase text-xs font-light ">No Results Found</h1>
                        }
                    </div>
                    {
                        totalItems > resPerPage && !loading &&
                        <div className="flex !my-10 w-full items-center justify-center">
                            <Pagination
                                resPerPage={resPerPage}
                                page={page}
                                totalItems={totalItems}
                                keyword={keyword}
                            />
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Search