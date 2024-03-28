// import PropTypes from 'prop-types';
import { RiArrowDropDownLine } from "react-icons/ri";

import { useEffect, useState } from "react";
import { getRead } from "../../Utilities/getData";
import ReadCard from "./ReadCard";

const ReadBooks = () => {
    // for ReadCard
    const [read, setRead] = useState([]);
    useEffect(() => {
        const loadRead = getRead()
        setRead(loadRead)
    }, [])
    // for sorting
    



    return (
        <div className="space-y-5">
            <div className="dropdown dropdown-hover absolute lg:left-[640px] left-[250px] top-52">
                <div tabIndex={0} role="button" className="btn m-1 text-lg bg-[#23BE0A] text-white">Sort By<RiArrowDropDownLine /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                    <li><a>Rating</a></li>
                    <li><a>Number Of Page</a></li>
                    <li><a>Publish Of Year</a></li>
                </ul>
            </div>

            {
                read.map(read => <ReadCard key={read.bookId} read={read}></ReadCard>)
            }


        </div>
    );
};

ReadBooks.propTypes = {

};

export default ReadBooks;