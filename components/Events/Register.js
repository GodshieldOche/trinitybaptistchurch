const Register = () => {
    return (
        <div className="max-w-xs md:max-w-[400px] mx-auto">
            <form className="space-y-3">
                <div className="space-y-2">
                    <label htmlFor="firstname" className="text-xs uppercase font-medium mb-2 ">First Name *</label>
                    <input
                        type="name"
                        name="name"
                        placeholder="Enter first name"
                        className="w-full px-3 py-2 md:text-xs xl:text-sm  border border-primary-dark focus:outline-none"
                        // value={name}
                        // onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastname" className="text-xs uppercase font-medium mb-2 ">Last Name *</label>
                    <input
                        type="name"
                        name="name"
                        placeholder="Enter last name"
                        className="w-full px-3 py-2 md:text-xs xl:text-sm  border border-primary-dark focus:outline-none"
                        // value={name}
                        // onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase font-medium mb-2 ">Email Address *</label>
                    <input
                        type="email"
                        name="email address"
                        placeholder="Enter email address "
                        className="w-full px-3 py-2 md:text-xs xl:text-sm  border border-primary-dark focus:outline-none"
                        // value={name}
                        // onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phonenumber" className="text-xs uppercase font-medium !mb-5 ">Phone Number *</label>
                    <input
                        type="number"
                        name="number"
                        placeholder="Enter phone number "
                        className="w-full px-3 py-2 md:text-xs xl:text-sm  border border-primary-dark focus:outline-none"
                        // value={name}
                        // onChange={(e) => { setName(e.target.value) }}
                    />
                </div>
                <div className="flex justify-center space-x-3 items-center !mt-5">
                    <button className="text-sm uppercase text-white bg-primary-light py-2 px-4">
                        Register
                    </button>
                    <p className="text-xs uppercase font-medium">you can also!</p>
                    <button className="text-sm uppercase text-white bg-primary-dark py-2 px-4">
                        Donate
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register
