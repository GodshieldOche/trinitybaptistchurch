import { useDispatch } from "react-redux"
import { setModalState } from "../../redux/features/menu"

const Modal = () => {

    const dispatch = useDispatch()

    return (
        <div
            onClick={() => {dispatch(setModalState(false))}}
            className="fixed w-full h-screen  top-0 bottom-0 left-0 right-0 overflow-y-hidden overscroll-y-none bg-gray-900/90 z-50 ">

            <div
                onClick={(e) => e.stopPropagation()}
                className="flex w-full h-full justify-center items-center">
                <div className="flex flex-col space-y-5 max-w-screen-md mx-auto h-[500px] w-full !px-5 !py-5 relative rounded-2xl bg-white">
                    <h1 className="uppercase font-medium text-primary-dark text-center">Day 1, June 11th 2022</h1>
                    <form className="flex flex-col space-y-4 w-full items-center justify-start">
                        <div className="flex w-full items-center space-x-3">
                            <div className="w-full space-y-2">
                                <label htmlFor="title" className="ml-2 text-sm uppercase">Topic</label>
                                <input
                                    type="title"
                                    name="title"
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    required
                                // value={name}
                                // onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            <div className="w-full space-y-2">
                                <label htmlFor="title" className="ml-2 text-sm uppercase">Time</label>
                                <input
                                    type="title"
                                    name="title"
                                    className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                    required
                                // value={name}
                                // onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                        </div>
                        {/* preacher */}
                        <div className="space-y-2 w-full">
                            <label htmlFor="name" className="ml-2 text-sm uppercase">Preacher</label>
                            <select
                                type="text"
                                name="category"
                                className="w-full capitalize text-gray-500 !px-1 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                            // value={category}
                            // onChange={(e) => {
                            //     setCategory(e.target.value)
                            //     handleTopic(e.target.value)
                            // }}
                            >
                                {
                                    ["select preacher", "abutu peter joshua", "eleazar maduka", "oche chidi"].map(preacher => (
                                        <option className="capitalize" key={preacher} value={preacher}>{preacher}</option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* description */}
                        {/* Description */}
                        <div className="w-full space-y-2">
                            <label htmlFor="description" className="ml-2 text-sm uppercase">description</label>
                            <textarea
                                className="w-full px-3 py-2 text-sm rounded-md border-gray-300  border focus:outline-none focus:ring-1 focus:ring-primary-light"
                                rows="4"
                            // value={description}
                            // onChange={(e) => { setDescription(e.target.value) }}
                            >
                            </textarea>
                        </div>
                    </form>
                    <div className="absolute bottom-2 left-0 right-0 flex  items-center justify-around w-full !mb-3 ">
                        <h1
                            onClick={() => { dispatch(setModalState(false)) }}
                            className="cursor-pointer text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-red-700">
                            cancel
                        </h1>
                        <button className="text-center text-white py-1.5 rounded-md text-sm  px-7 uppercase bg-blue-600">
                            add session
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Modal
