import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Books from "../../Components/Books/Books";

const Home = () => {
    const allBooks = useLoaderData()

    return (
        <div>
            <div className=" bg-[#1313130D] rounded-xl">
                <Banner></Banner>
            </div>
            <div className="mt-24">
                <h1 className="text-3xl font-bold text-center">Books</h1>
                <div className="grid lg:grid-cols-3 gap-6 mt-5">
                    {
                        allBooks.map(books => <Books key={books.bookId} books={books} ></Books>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;