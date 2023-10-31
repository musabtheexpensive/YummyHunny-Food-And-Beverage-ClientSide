import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
      logOut().then().catch();
    };
    const navLinks = (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/addProduct">Add Product</NavLink>
          </li>
          <li>
            <NavLink to="/myCart">My Cart</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      );
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
        <div className="flex">
          <div>
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-red-400 text-transparent bg-clip-text hover:scale-110 transform transition duration-300 hover:rotate-12 circle-text">
            Taste The Food
          </h2>
          </div>
          <div>
            <img className="w-1/4 h-2/3" src="https://i.ibb.co/BqjH90R/pic23.png" alt="" />
          </div>
        </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            {/* <div className="w-10 rounded-full">
              <img src='' />
            </div> */}
          </label>
          {user ? (
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">LogIn</button>
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;