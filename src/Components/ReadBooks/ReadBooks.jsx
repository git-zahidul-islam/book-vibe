// import PropTypes from 'prop-types';
import { RiArrowDropDownLine } from "react-icons/ri";

import { useEffect, useState } from "react";
import { getRead } from "../../Utilities/getData";
import ReadCard from "./ReadCard";
import { useLoaderData } from "react-router-dom";

const ReadBooks = () => {
    const books = useLoaderData()
    // for ReadCard
    const [read, setRead] = useState([]);
    // before here have useEffect

    // for sorting
    const handleBookFilter = (filter) => {
        let sortBooks = [...read]
        if (filter === 'rating') {
            sortBooks.sort((a, b) => b.rating - a.rating)
        } else if (filter === 'pages') {
            sortBooks.sort((a, b) => b.totalPages - a.totalPages)
        } else if (filter === 'year') {
            sortBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }
        setRead(sortBooks)
    }


    // some correction
    useEffect(() => {
        const loadRead = getRead()
        if (books.length) {
            const readBooks = []
            for (const id of loadRead) {
                const book = find((book) => book.BookId === id)
                if (book) {
                    readBooks.push(book)
                }
            }
            setRead(readBooks)
        }
        setRead(loadRead)
    }, [books])



    return (
        <div className="space-y-5">
            <div className="flex justify-center mt-5">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1 text-lg bg-[#23BE0A] text-white">Sort By<RiArrowDropDownLine /></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                        <li onClick={() => handleBookFilter('rating')}><a>Rating</a></li>
                        <li onClick={() => handleBookFilter('pages')}><a>Pages</a></li>
                        <li onClick={() => handleBookFilter('year')}><a>Publish of Year</a></li>
                    </ul>
                </div>
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