// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import image from './../../../public/banner.png'

const Banner = () => {
    return (
        <div className="flex lg:flex-row justify-around flex-col-reverse items-center lg:gap-0 gap-5 w-full lg:py-10 py-7">
            <div className="space-y-5">
                <h1 className="lg:text-5xl text-3xl font-bold md:w-[500px] w-full lg:text-start text-center lg:px-0 px-3">Books to freshen up your bookshelf</h1>
                <Link className='flex lg:justify-start justify-center' to={'/listedBooks'}><button className="bg-[#23BE0A] btn text-white text-xl">All Show Book</button></Link>
            </div>
            <div>
                <img className="lg:w-80 w-64" src={image} alt="image" />
            </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;