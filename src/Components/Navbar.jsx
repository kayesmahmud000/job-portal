import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContex";
import logo from '../../public/icon.png'


const Navbar = () => {
const {user,logOut}=useContext(AuthContext)
    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/myJob"}>My Apply Job</NavLink></li>
        <li><NavLink to={"/addJob"}>Add Job</NavLink></li>
        <li><NavLink to={"/myAddedJob"}>My Added Job</NavLink></li>
       
        
        
    </>
    return (
        <div>
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {links}
                        </ul>
                    </div>
                    <img className="w-12" src={logo} alt="" />
                    <h1 className=" text-3xl font-bold">JOB PORTAL</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {
                        user && user.email ? <><button onClick={logOut} className="btn">log Out</button> </>:<>
                         <Link to='/register'>Register</Link>
                         <Link to='/login'><button className="btn">login</button></Link>
                        </>
                    }
                   
                  
                </div>
            </div>
        </div>
    );
};

export default Navbar;