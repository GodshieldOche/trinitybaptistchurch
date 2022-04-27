import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image'

const lists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const Ministers = () => {
    return (
        <div className="flex w-full flex-col space-y-10 mb-3 p-4">
            <div className="space-y-5">
                <div className="flex justify-center">
                    <button className=" flex items-center justify-center space-x-2 hover:scale-105 hover:shadow-2xl
                bg-primary-light rounded-md shadow-md text-gray-100 px-4 py-2">
                        <h1 className=" uppercase text-sm">Add New Minister</h1>
                        <AddIcon />
                    </button>
                </div>
                <table className="min-w-full table-auto border-collapse ">
                    <thead className="bg-gray-800 text-gray-200 ">
                        <tr className="">
                            <th scope="col" className="text-sm font-medium uppercase px-4 py-4 text-left">
                                #
                            </th>
                            <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                Name
                            </th>
                            <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                Role
                            </th>
                            <th scope="col" className="text-sm font-medium uppercase px-3 py-4 text-left">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white  ">
                        {
                            lists.map((item, index) => (
                                <tr key={item} className={` transition duration-300 ease-in-out border-b border-b-gray-200`}>

                                    <td className="px-4 py-4 whitespace-nowrap text-sm  ">
                                        <h1>{index + 1}</h1>
                                    </td>
                                    <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                        <div className="flex space-x-2 items-center">
                                            <div className="h-[40px] w-[40px] rounded-full relative">
                                                <Image src="/img/abutu.jpg"
                                                    className="object-cover w-full h-full rounded-full"
                                                    layout="fill"
                                                    blurDataURL="data:..."
                                                    placeholder="blur"
                                                    alt="logo" />
                                            </div>
                                            <h1 className="capitalize">Abutu Peter Joshua</h1>
                                        </div>
                                    </td>
                                    <td className="text-sm  px-3 py-4 whitespace-nowrap ">
                                        <h1 className="capitalize">Pastor/Teacher</h1>
                                    </td>
                                    <td className="text-sm  font-light px-3 py-4 whitespace-nowrap">
                                        <div className="flex space-x-2 items-center">
                                            <div className="flex justify-center items-center cursor-pointer hover:bg-primary-dark bg-primary-dark/90 w-7 h-7 rounded-full">
                                                <EditIcon className="!text-white !text-base" />
                                            </div>
                                            <div className="flex justify-center items-center cursor-pointer hover:bg-red-600 bg-red-600/90 w-7 h-7 rounded-full">
                                                <DeleteIcon className="!text-white !text-base" />
                                            </div>
                                        </div>
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Ministers
