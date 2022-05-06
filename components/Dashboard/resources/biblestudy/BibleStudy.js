import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from "next/link";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import Loader from '../../../common/Loader';
import { format } from 'date-fns'
import { getAdminBibleStudies } from '../../../../redux/features/bibleStudies';
import { setDeleteModalData, setDeletModalState } from '../../../../redux/features/menu'



const BibleStudy = () => {

    const { loading, bibleStudies, message } = useSelector(state => state.bibleStudies)
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        dispatch(getAdminBibleStudies()).then((result) => {
            if (result.error) {
                console.log(result.error)
            }
        })
    }, [])


    return (
        <div className="space-y-5">
            <div className="flex justify-center">
                <Link href="/admin/resources/biblestudy/new" >
                    <a>
                        <button className=" flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-2xl
                        bg-primary-light rounded-md shadow-md text-gray-100 px-4 py-2">
                            <h1 className=" uppercase text-sm">Add New Bible Study</h1>
                            <AddIcon />
                        </button>
                    </a>
                </Link>
            </div>
            {
                loading ?
                    <Loader />
                    :
                    <table className="w-full ">
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
                                bibleStudies.map((study, index) => (
                                    <tr key={study._id} className={` transition duration-300 ease-in-out border-b border-b-gray-200`}>

                                        <td className="px-4 py-4 whitespace-nowrap text-sm  ">
                                            <h1>{index + 1}</h1>
                                        </td>
                                        <td className="text-sm px-3 py-4 whitespace-nowrap">
                                            <h1 className="capitalize">{ study.title }</h1>
                                        </td>
                                        <td className="text-sm px-3 py-4 whitespace-nowrap">
                                            <h1 className="capitalize">{study.preacher.name}</h1>
                                        </td>
                                        <td className="text-sm px-3 py-4 whitespace-nowrap">
                                            <h1 className="capitalize">{format(new Date(study.date), 'MMM, do, yyyy')}</h1>
                                        </td>
                                        <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                                            <div className="flex space-x-2 items-center">
                                                <div
                                                    onClick={() => {
                                                        router.push(`/admin/resources/biblestudy/${study._id}`)
                                                    }}
                                                    className="flex justify-center items-center cursor-pointer hover:bg-primary-dark bg-primary-dark/90 w-7 h-7 rounded-full">
                                                    <EditIcon className="!text-white !text-base" />
                                                </div>
                                                <div
                                                    onClick={() => {
                                                        dispatch(setDeleteModalData({ study, index }))
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
    )
}

export default BibleStudy
