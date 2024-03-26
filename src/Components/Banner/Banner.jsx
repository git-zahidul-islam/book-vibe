import PropTypes from 'prop-types';

const Banner = ({ bannerContent }) => {
    return (
        <div className="w-full">
            <div className="flex justify-around items-center">
                <div className="space-y-5">
                    <h1 className="text-5xl font-bold w-[500px] leading-[70px]">{bannerContent.bookName}</h1>
                    <div className="flex"><button className="bg-[#23BE0A] btn text-white text-xl">All Show Book</button></div>
                </div>
                <img className="w-80" src={bannerContent.images} alt="image" />
            </div>
        </div>
    );
};

Banner.propTypes = {
    bannerContent: PropTypes.object.isRequired
};

export default Banner;