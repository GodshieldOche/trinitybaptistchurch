import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminEmails } from '../../../../redux/features/emails';
import Loader from '../../../common/Loader';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { setDeleteModalData, setDeletModalState } from '../../../../redux/features/menu'

const Emails = () => {

    const { loading, emails } = useSelector(state => state.email)
    const dispatch = useDispatch();
    const router = useRouter();
    
    useEffect(() => {
        dispatch(getAdminEmails())
    }, [dispatch])

    return (
        <div className="space-y-5">
            {
                loading ? <Loader /> :
                    <table className="w-full ">
                        <thead className="bg-gray-800 text-gray-200 ">
                            <tr className="">
                                <th scope="col" className="text-sm font-medium uppercase px-4 py-4 text-left">
                                    #
                                </th>
                                <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                    Email
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
                                emails.map((email, index) => (
                                    <tr key={email._id} className={` transition duration-300 ease-in-out border-b border-b-gray-200`}>

                                        <td className="px-4 py-4 whitespace-nowrap text-sm  ">
                                            <h1>{index + 1}</h1>
                                        </td>
                                        <td className="text-sm px-3 py-4 whitespace-nowrap">
                                            <h1 className="lowercase">{email.email}</h1>
                                        </td>
                                        <td className="text-sm px-3 py-4 whitespace-nowrap">
                                            <h1 className="capitalize">{format(new Date(email.date), 'MMM, do, yyyy')}</h1>
                                        </td>
                                        <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                                            <div className="flex space-x-2 items-center">
                                                <div
                                                    onClick={() => {
                                                        dispatch(setDeleteModalData({ email, index }))
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

export default Emails
