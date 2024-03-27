// import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import { getRead } from "../../Utilities/getData";
import ReadCard from "./ReadCard";

const ReadBooks = () => {
    const [read, setRead] = useState([]);

    useEffect(() => {
        const loadRead = getRead()
        setRead(loadRead)
    }, [])


    return (
        <div className="mt-5 space-y-5">
            {
                read.map(read => <ReadCard key={read.bookId} read={read}></ReadCard>)
            }
        </div>
    );
};

ReadBooks.propTypes = {

};

export default ReadBooks;