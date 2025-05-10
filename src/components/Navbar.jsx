import React from "react";

const Navbar = () => {
    return (
        <div className="flex items-center absolute w-full top-0 left-0 bg-black/40 text-white p-4 ">

            {/* logo */}
            <div className="flex items-center">
                <img src="/assets/jobtrack.png" alt="Logo" className="h-13 w-13 mr-2" />
            </div>

            {/* links */}
            <div className="flex-1">
                <ul className="flex justify-end space-x-4">
                    <li><a href="#about" className="text-blue-500">About</a></li>
                    <li><a href="#contact" className="text-blue-500">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;