import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
    const books = useLoaderData()
    console.log(books)

    return (
        <div>
            <div className="h-[520px] bg-[#1313130D] flex items-center rounded-xl mt-8">
                <Banner bannerContent={books[0]}></Banner>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Home;