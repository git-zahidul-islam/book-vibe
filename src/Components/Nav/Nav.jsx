import { Link, NavLink } from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return (
        <div className="navbar bg-base-100 px-0 mt-5 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="flex flex-col gap-4 dropdown-content mt-3 z-[1] px-2 py-6 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/listedBooks"}>Listed Book</NavLink></li>
                        <li><NavLink to={"/pageToRead"}>Pages to Read</NavLink></li>
                        <li><NavLink to={"/requestBook"}>Book Request</NavLink></li>
                        <li><NavLink to={"/aboutMe"}>About Us</NavLink></li>
                    </ul>
                </div>
                <Link to={'/'} className="lg:text-4xl text-2xl font-bold text-[#131313]">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-4">
                    <li><NavLink to={"/"} className={`text-xl`}>Home</NavLink></li>
                    <li><NavLink to={"/listedBooks"} className={`text-xl`}>Listed Pages</NavLink></li>
                    <li><NavLink to={"/pageToRead"} className={`text-xl`}>Page To Read</NavLink></li>
                    <li><NavLink to={"/requestBook"} className={`text-xl`}>Book Request</NavLink></li>
                    <li><NavLink to={"/aboutMe"} className={`text-xl`}>About Us</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <button className="lg:px-6 px-3 lg:py-4 py-2 lg:text-lg text-base font-semibold text-white rounded-lg bg-[#23BE0A]">Sign In</button>
                <button className="lg:px-6 px-3 lg:py-4 py-2 lg:text-lg text-base font-semibold text-white rounded-lg bg-[#59C6D2]">Sign Up</button>
            </div>
        </div>
    );
};

export default Nav;