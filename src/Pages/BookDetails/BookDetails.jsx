import { useLoaderData, useParams } from "react-router-dom";
import { saveRead, saveWishList } from "../../Utilities/getData";



const BookDetails = () => {
    const { id } = useParams()
    const bookDetails = useLoaderData()
    const details = bookDetails.find(book => book.bookId === parseInt(id))

    const { bookName, author, category, review, tags, images, totalPages, yearOfPublishing, rating, publisher } = details;

    const handleRead = (read) => {
        saveRead(read)
    }

    const handleWish = (wish) =>{
        saveWishList(wish)
    }

    return (
        <div>
            <section className="p-6 text-black">
                <div className="container grid gap-6 mx-auto  lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full h-[650px] px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-[#1313130D]">
                        <div className="flex justify-center items-center h-full">
                            <img className="h-[400px]" src={images} alt="image" />
                        </div>
                    </div>
                    <div className="w-full xl:col-span-3 space-y-5">
                        <h1 className="text-4xl font-bold text-[#131313]">{bookName}</h1>
                        <p>By: {author}</p>
                        <hr />
                        <p>{category}</p>
                        <hr />
                        <p className="text-base font-bold text-[#131313]">Review: <span className="text-base font-normal text-[#131313B3]">{review}</span></p>
                        <p className="text-base font-bold flex gap-2 items-center">Tag:
                            <span className="text-base font-medium text-[#23BE0A] bg-[#23BE0A0D] rounded-lg px-4 py-2">#{tags[0]}</span>
                            <span className="text-base font-medium text-[#23BE0A] bg-[#23BE0A0D] rounded-lg px-4 py-2">#{tags[1]}</span>
                        </p>
                        <hr />
                        <div className="flex gap-14">
                            <div className="space-y-3">
                                <h1 className="text-base font-medium text-[#131313B3]">Number of Pages: </h1>
                                <h1 className="text-base font-medium text-[#131313B3]">Publisher: </h1>
                                <h1 className="text-base font-medium text-[#131313B3]">Year of Publishing: </h1>
                                <h1 className="text-base font-medium text-[#131313B3]">Rating: </h1>
                            </div>
                            <div className="space-y-3">
                                <h1 className="text-base font-semibold text-[#131313]">{totalPages}</h1>
                                <h1 className="text-base font-semibold text-[#131313]">{publisher}</h1>
                                <h1 className="text-base font-semibold text-[#131313]">{yearOfPublishing}</h1>
                                <h1 className="text-base font-semibold text-[#131313]">{rating}</h1>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <button onClick={() => handleRead(details)} className="rounded-xl border-2 px-4 py-5 border-[#1313134D]">Read</button>
                            <button onClick={() => handleWish(details)} className="rounded-xl border-2 px-4 py-5 bg-[#50B1C9] border-[#50B1C9]">Wishlist</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookDetails;