import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/img/logo3.jpg";
import { AuthContext } from "../../providers/AuthProvider";

const NaveBar = () => {
  const {user,logout} = useContext(AuthContext)
  const handelLogOut =()=>{
    logout()
    .then(() => {
      Swal.fire({
        title: "success!",
        text: "Logout successful!!",
        icon: "success",
        confirmButtonText: "Cool",
      });
    }).catch((error) => {
      console.log('error Message', error.message);
    });
  }
  const naveItem = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/allToys`}>All Toys</NavLink>
      </li>
      {user && <li>
        <NavLink to={`/myToys`}>My Toys</NavLink>
      </li>}
      {user &&<li>
        <NavLink to={`/addAToy`}>Add A Toy</NavLink>
      </li>}
      <li>
        <NavLink to={`/blog`}>Blogs</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {naveItem}
          </ul>
        </div>

        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={logo} />
            </div>
          </div>
          <a className="btn btn-ghost normal-case text-xl">BrainSprouts</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{naveItem}</ul>
      </div>
      {user ? (
          <div className="flex gap-2 md:gap-5 navbar-end">
            <div className="avatar relative">
              <div className="w-16 rounded-full">
                <img src={user?.photoURL} />
              </div>
              <div className="bg-black text-white bg-opacity-60 absolute top-0 md:font-bold opacity-0 hover:opacity-100">
                <p className="text-center py-2">{user?.displayName}</p>
              </div>
            </div>
            <div className="">
              <button onClick={handelLogOut} className="btn w-16 md:w-full">
                Logout
              </button>
            </div>
          </div>
        ) : (
          <Link to={`/login`} className="navbar-end">
            <button className="btn">Login</button>
          </Link>
        )}
      {/* <div className="navbar-end">
      <div className="flex items-center">
      <a className="btn btn-ghost normal-case text-xl">BrainSprouts</a>
          <div className="avatar">
            <div className="w-16 rounded-full">
              <img src={logo} />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default NaveBar;
