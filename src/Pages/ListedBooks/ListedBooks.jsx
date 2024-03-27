import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex,setTabIndex] = useState(0)
    
    
    return (
        <div>
            <h1 className="text-xl text-center font-bold text-[#131313] bg-[#1313130D] py-8 rounded-2xl">Books</h1>
            <div className="flex justify-center">
                <div className="dropdown dropdown-hover mt-5">
                    <div tabIndex={0} role="button" className="btn m-1 text-lg bg-[#23BE0A] text-white">Sort By<RiArrowDropDownLine /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            {/* tab items */}
            <div className="flex items-center sm:justify-start overflow-x-auto overflow-y-hidden flex-nowrap">
                <Link
                    onClick={() => setTabIndex(0)}
                    to='' className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b' } rounded-t-lg border-gray-400 text-gray-400`}>
                    <span>Read Books</span>
                </Link>
                <Link
                    onClick={() => setTabIndex(1)}
                    to={`wishlistBooks`} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b' } rounded-t-lg border-gray-400 text-gray-500`}>
                    <span>Wishlist Books</span>
                </Link>
            </div>

            {/* outlet here */}
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;