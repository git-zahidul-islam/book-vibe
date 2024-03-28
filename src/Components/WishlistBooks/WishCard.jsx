import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineFindInPage } from "react-icons/md";
import { Link } from 'react-router-dom';

const WishCard = ({ wish }) => {
    console.log(wish)
    const { bookId, bookName, author, category, tags, images, totalPages, yearOfPublishing, rating, publisher } = wish
    return (
        <div className='flex gap-6 border-2 p-4 rounded-xl'>
            <div className='bg-[#1313130D] w-60 h-56 flex items-center justify-center rounded-xl'>
                <img src={images} alt="images" />
            </div>
            <div className='flex-1 space-y-2'>
                <h1 className='text-2xl font-bold text-[#131313]'>{bookName}</h1>
                <p className='text-base font-medium text-[#131313CC]'>By: {author}</p>
                <div className='flex gap-4 items-center'>
                    <p className="text-base font-bold flex gap-2 items-center">Tag:
                        <span className="text-base font-medium text-[#23BE0A] bg-[#23BE0A0D] rounded-lg px-4 py-2">#{tags[0]}</span>
                        <span className="text-base font-medium text-[#23BE0A] bg-[#23BE0A0D] rounded-lg px-4 py-2">#{tags[1]}</span>
                    </p>
                    <p className='text-[#131313CC] text-base font-medium flex items-center gap-1'><IoLocationOutline size={'19px'}></IoLocationOutline>Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className='flex gap-5 items-center'>
                    <p className='text-base font-medium text-[#13131399] flex items-center gap-2'><FaUserFriends size={'20px'}></FaUserFriends>Publisher: {publisher}</p>
                    <p className='text-base font-medium text-[#13131399] flex items-center gap-2'><MdOutlineFindInPage size={'20px'}></MdOutlineFindInPage>Page: {totalPages}</p>
                </div>
                <hr />
                <div className='flex gap-5'>
                    <h1 className='px-5 text-base font-medium rounded-3xl py-3 text-[#328EFF] bg-[#328EFF26]'>Category: {category}</h1>
                    <h1 className='px-5 text-base font-medium rounded-3xl py-3 text-[#FFAC33] bg-[#FFAC3326]'>Rating: {rating}</h1>
                    <Link to={`/book/${bookId}`}><button className=' px-5 text-lg font-semibold rounded-3xl py-3 text-white bg-[#23BE0A]'>view Details</button></Link>
                </div>
            </div>
        </div>
    );
};

WishCard.propTypes = {
    wish: PropTypes.object.isRequired
};

export default WishCard;