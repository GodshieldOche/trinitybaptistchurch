import ClipLoader from "react-spinners/ClipLoader";


const Loader = () => {
    return (
        <div className="flex w-full h-full justify-center items-center">
            <ClipLoader color="#111827" size={50} />
        </div>
    )
}

export default Loader
