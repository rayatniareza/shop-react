

const TopNavbar = ()=>{

    return (
        <div className="bg-gray-800 fixed top-0 w-full z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <div className="text-white text-xl font-bold">Shopeasy</div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <div className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">Home</div>
                            <div className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">Services</div>
                            <div className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">About</div>
                            <div className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium">Contact</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TopNavbar