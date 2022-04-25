const Link = ({ Icon, name, color, active, toggleActive}) => {
    return (
        <div
            onClick={() => { toggleActive(name) }}
            className={` ${active === name ? "text-gray-900 rounded-l-full bg-gray-200 font-medium" : "hover:bg-gray-800 hover:rounded-l-full font-light"} flex space-x-2 cursor-pointer items-center py-2 pl-5 `}>
            <Icon className={`${color}  !text-lg`}/>
            <h1 className=" tracking-wide capitalize">{ name }</h1>
        </div>
    )
}

export default Link


// text-gray-900 rounded-l-full bg-gray-100