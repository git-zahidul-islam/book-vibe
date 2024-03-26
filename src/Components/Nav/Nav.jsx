import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-base-100 px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Listed Book</a></li>
                        <li><a>Pages to Read</a></li>
                    </ul>
                </div>
                <a className="text-2xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={"/"} className={`px-4 py-2 text-xl ${({ isActive }) => isActive ? 'text-red-600' : 'text-white'}`}>Home</NavLink></li>
                    <li><NavLink to={"/listedBooks"} className={`px-4 py-2 text-xl ${({ isActive }) => isActive ? 'text-red-600' : 'text-white'}`}>Listed Pages</NavLink></li>
                    <li><NavLink to={"/pageToRead"} className={`px-4 py-2 text-xl ${({ isActive }) => isActive ? 'text-red-600' : 'text-white'}`}>Page To Read</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <a className="btn btn-primary">Sign In</a>
                <a className="btn btn-success">Sign Up</a>
            </div>
        </div>
    );
};

export default Nav;