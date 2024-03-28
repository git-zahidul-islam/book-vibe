// import PropTypes from 'prop-types';
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { getWishList } from "../../Utilities/getData";
import WishCard from "./WishCard";
import { useLoaderData } from "react-router-dom";

const WishlistBooks = () => {
    const books = useLoaderData()
    const [wish, setWish] = useState([]);

    const handleBookFilter = (filter) => {
        let sortBooks = [...wish]
        if (filter === 'rating') {
            sortBooks.sort((a, b) => b.rating - a.rating)
        } else if (filter === 'pages') {
            sortBooks.sort((a, b) => b.totalPages - a.totalPages)
        } else if (filter === 'year') {
            sortBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
        }
        setWish(sortBooks)
    }

    useEffect(() => {
        const storeRead = getWishList()
        if (books.length) {
            const readBooks = [];
            for (const id of storeRead) {
                const book = find((book) => book.bookId === id)
                if (book) {
                    readBooks.push(book)
                }
            }
            setWish(readBooks)
        }
        setWish(storeRead)
    }, [books])

    return (
        <div className="mt-5 space-y-5">
            <div className="dropdown dropdown-hover absolute lg:left-[640px] left-[200px] top-[225px]">
                <div tabIndex={0} role="button" className="btn m-1 text-lg bg-[#23BE0A] text-white">Sort By<RiArrowDropDownLine /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                     <li onClick={() => handleBookFilter('rating')}><a>Rating</a></li>
                    <li onClick={() => handleBookFilter('pages')}><a>Pages</a></li>
                    <li onClick={() => handleBookFilter('year')}><a>Publish of Year</a></li>
                </ul>
            </div>
            {
                wish.map(wish => <WishCard key={wish.bookId} wish={wish}></WishCard>)
            }
        </div>
    );
};

WishlistBooks.propTypes = {

};

export default WishlistBooks;