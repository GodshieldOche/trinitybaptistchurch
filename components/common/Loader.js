import PropagateLoader from "react-spinners/PropagateLoader";


const Loader = () => {
    return (
        <div className="flex w-full h-full justify-center items-center">
            <PropagateLoader color="#36D7B7" size={15} />
        </div>
    )
}

export default Loader
