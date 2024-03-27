// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import { getWishList } from "../../Utilities/getData";
import WishCard from "./WishCard";

const WishlistBooks = () => {
    const [wish, setWish] = useState([]);

    useEffect(() => {
        const storeRead = getWishList()
        setWish(storeRead)
    }, [])

    return (
        <div className="mt-5 space-y-5">
            {
                wish.map(wish => <WishCard key={wish.bookId} wish={wish}></WishCard>)
            }
        </div>
    );
};

WishlistBooks.propTypes = {

};

export default WishlistBooks;