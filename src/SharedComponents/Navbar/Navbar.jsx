import {  NavLink, useNavigate } from "react-router-dom";
import userDefaultPic from '../../assets/user.png'
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../ContextProvider/MyContext";


const Navbar = () => {
    
    const {user, userSignOut} = useContext(AuthContext)
    const navigate = useNavigate()

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>

    </>
    
    // Sign Out User
    const handleSignOut = () => {
        userSignOut()
        .then(() => {
            console.log('log out successfull')
            navigate("/login")
        })
        .catch((error) => {
            console.error(error)
        })
    }

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul id="nav" className="menu menu-horizontal px-1 text-lg gap-4">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={userDefaultPic}/>
                        </div>
                    </label>
                    {
                        user ? <button onClick={handleSignOut} className="btn bg-[#403F3F] text-[#FFF] text-xl font-semibold px-6">Logout</button>:
                        <NavLink to="/login">
                        <button className="btn bg-[#403F3F] text-[#FFF] text-xl font-semibold px-6">Login</button>
                    </NavLink>
                    }
                    {/* <NavLink to="/login">
                        <button className="btn bg-[#403F3F] text-[#FFF] text-xl font-semibold px-6">Login</button>
                    </NavLink> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;