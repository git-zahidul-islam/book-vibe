
const AboutMe = () => {
    return (
        <div className="px-4 space-y-5">
            <div>
                <h1 className="text-center">About Us</h1>
                <p className="tracking-widest">Welcome to Book Vibe, With us you will find numerous books from which you will be greatly benefited. We are your go-to platform for discovering, exploring, and immersing yourself in the captivating realm of books.
                    <br />
                    At Book Vibe, we understand the profound impact that books can have on our lives. They entertain, educate, inspire, and challenge us in ways that few other mediums can. With an endless array of genres, authors, and perspectives to explore, theres a book out there for everyone, and we are here to help you find it.</p>
            </div>
            <hr className="border-dashed border-2 border-green-500" />
            <div className="flex flex-col items-center w-full">
                <div className="bg-gray-300">
                    <h1>Email: <span className="italic">book.vive@gmail.com</span></h1>
                    <h1>Phone: <span className="italic">8801794274577</span></h1>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;