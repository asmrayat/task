import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { logout, user } = useAuth();

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {!user && (
              <li>
                <Link to="/Register">Register</Link>
              </li>
            )}
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {user && (
              <li>
                <button
                  onClick={() => logout()}
                  className="btn bg-red-500 text-white"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Fokira Shop</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!user && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {!user && (
            <li>
              <Link to="/Register">Register</Link>
            </li>
          )}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          {user && (
            <li>
              <button
                onClick={() => logout()}
                className="btn bg-red-500 text-white"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="avatar">
          {user&&<div className="w-10 m-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.photoURL} />
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
