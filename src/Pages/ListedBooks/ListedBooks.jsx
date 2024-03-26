import { RiArrowDropDownLine } from "react-icons/ri";

const ListedBooks = () => {
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
        </div>
    );
};

export default ListedBooks;