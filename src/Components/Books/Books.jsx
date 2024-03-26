// import PropTypes from 'prop-types';

const Books = ({ books }) => {
    // const { tags } = books
    return (
        <div>
            <div className="p-6 rounded-md shadow-md border-2">
                <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase
                     text-violet-400">hhh</span>
                    <h2 className="text-xl font-semibold tracking-wide">Nam maximus purus</h2>
                </div>
                <p className="text-gray-100">Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed feugiat mi. Etiam ut lacinia dui.</p>
            </div>
        </div>
    );
};

Books.propTypes = {

};

export default Books;