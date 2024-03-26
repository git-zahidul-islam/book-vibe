import PropTypes from 'prop-types';
import { FaRegStar } from "react-icons/fa";

const Books = ({ books }) => {
    const { tags, bookName, author, category, rating, images } = books
    return (
        <div>
            <div className="p-6 rounded-md shadow-md border-2">
                <div className="rounded-md h-72 flex items-center justify-center bg-[#F3F3F3]">
                    <img src={images} alt="image" />
                </div>
                <div className="mt-6 mb-2 space-y-3">
                    <div className="flex gap-3">
                        <span className="block text-base font-medium tracking-widest uppercase
                     text-[#23BE0A] bg-[#23BE0A0D] px-4 p-2">{tags[0]}</span>
                        <span className="block text-base font-medium tracking-widest uppercase
                     text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2">{tags[1]}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#131313] tracking-wide">{bookName}</h2>
                    <p className="text-base font-medium text-[#131313CC]">By : {author}</p>
                </div>
                <hr className="border-[1px] border-dashed text-[#13131326] mt-4" />
                <div className="flex justify-between mt-4">
                    <p className="text-base font-medium text-[#131313CC]">{category}</p>
                    <p className="text-base font-medium text-[#131313CC] flex gap-2 items-center">{rating} <FaRegStar /></p>
                </div>
            </div>
        </div>
    );
};

Books.propTypes = {
    books: PropTypes.object.isRequired
};

export default Books;