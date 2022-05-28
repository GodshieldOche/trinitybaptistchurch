const NavLink = ({ name, toggleActive, active}) => {
    return (
        <h1 onClick={() => { toggleActive(name) }}
            className={`${active === name ? "bg-primary-dark text-white font-light" : "hover:bg-primary-dark/70 font-light hover:text-white"} uppercase text-sm py-1 px-2 cursor-pointer`}>
            {name}
        </h1>
    )
}

export default NavLink
