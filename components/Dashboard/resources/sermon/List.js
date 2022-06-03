import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from "next/link";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import Loader from '../../../common/Loader';
import { getAdminSermons } from "../../../../redux/features/sermons";
import { format } from 'date-fns'
import { setDeleteModalData, setDeletModalState  } from '../../../../redux/features/menu'
import { Pagination } from '../../../common/Pagination';


const List = () => {

    const { loading, sermons, totalItems, resPerPage, message } = useSelector(state => state.sermons)
    const dispatch = useDispatch();
    const router = useRouter();

    const page = Number(router.query.page) || 1

    useEffect(() => {
        dispatch(getAdminSermons({page})).then((result) => {
            if (result.error) {
                console.log(result.error)
            }
        })
    }, [dispatch, page])


    return (
        <div className="space-y-5">
            <div className="flex justify-center">
                <Link href="/admin/resources/sermon/new">
                    <a>
                        <button className=" flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-2xl
                        bg-primary-light rounded-md shadow-md text-gray-100 px-4 py-2">
                                    <h1 className=" uppercase text-sm">Add New Sermon</h1>
                                    <AddIcon />
                        </button>
                    </a>
                </Link>
            </div>
            {
                loading ?
                    <Loader />
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
                                sermons?.map((sermon, index) => (
                                    <tr key={sermon._id} className={` transition duration-300 ease-in-out border-b border-b-gray-200`}>

                                        <td className="px-4 py-4 whitespace-nowrap text-sm  ">
                                            <h1>{index + 1}</h1>
                                        </td>
                                        <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                            <h1 className="capitalize">{sermon.title}</h1>
                                        </td>
                                        <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                            <h1 className="capitalize">{ sermon.preacher.name }</h1>
                                        </td>
                                        <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                            <h1>{format(new Date(sermon.date), 'MMM, do, yyyy') }</h1>
                                        </td>
                                        <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                                            <div className="flex space-x-2 items-center">
                                                <div
                                                    onClick={() => {
                                                        router.push(`/admin/resources/sermon/${sermon._id}`)
                                                    }}
                                                    className="flex justify-center items-center cursor-pointer hover:bg-primary-dark bg-primary-dark/90 w-7 h-7 rounded-full">
                                                    <EditIcon className="!text-white !text-base" />
                                                </div>
                                                <div
                                                    onClick={() => {
                                                        dispatch(setDeleteModalData({ sermon, index }))
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
            {
                totalItems > resPerPage && !loading &&
                <div className="flex !my-10 w-full items-center justify-center">
                    <Pagination
                        resPerPage={resPerPage}
                        page={page}
                        totalItems={totalItems}
                    />
                </div>
            }
            
        </div>
    )
}

export default List