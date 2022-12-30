import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const user = true;
  let [open, setOpen] = useState(false);
  let Links = [
    { name: "Home", link: "/" },
    { name: "Write", link: "/write" },
    { name: "Posts", link: "/posts" },
    { name: "Contact", link: "/contact" },
    { name: "About", link: "/about" },
  ];
  return (
    <>
      <div className="w-full p-0 m-0 h-[55px] bg-gradient-to-r from-blue-500 to-red-200 hover:drop-shadow-2xl shadow-black sticky ">
        <div className="md:flex items-center justify-between py-2 md:px-2 px-3">
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-5 top-2 cursor-pointer md:hidden"
          >
            <i className="fa-solid fa-bars" name={open ? "close" : "menu"}></i>
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute rounded-lg md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl- transition-all duration-500 ease-in-out ${
              open ? "top-10 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li
                key={link.name}
                className="px-8 cursor-pointer transition ease-in-out hover:scale-110 hover:bg-blue-100 hover:font-bold hover:drop-shadow-2xl shadow-black rounded-md"
              >
                <Link
                  to={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="topRight">
            {user ? (
              <>
                <Unicons.UilSearch
                  className=" mx-2  hover:drop-shadow-2xl shadow-black transition ease-in-out hover:scale-125 cursor-pointer"
                  size={30}
                />
                <Link to="/login">
                  <i className="fa-solid fa-user mx-2  transition ease-in-out hover:scale-125 text-2xl cursor-pointer hover:drop-shadow-2xl shadow-black ml-5"></i>
                </Link>
                <Link to="/settings">
                  {" "}
                  <i className="fa-solid fa-gear transition ease-in-out hover:scale-125 text-2xl cursor-pointer ml-5 hover:drop-shadow-2xl shadow-black"></i>
                </Link>
                {user && (
                  <ul className="flex ">
                    <li className="px-4 ml-9 max-lg:hidden cursor-pointer text-sm transition ease-in-out hover:scale-110 hover:bg-blue-100 hover:font-bold hover:drop-shadow-2xl shadow-black rounded-md">
                      Logout
                    </li>
                  </ul>
                )}
              </>
            ) : (
              <ul className="flex ">
                {" "}
                <li className="px-5 cursor-pointer transition ease-in-out hover:scale-110 hover:bg-blue-100 hover:font-bold hover:drop-shadow-2xl shadow-black rounded-md">
                  <Link to="/login">LOGIN</Link>
                </li>
                <li className="px-5 cursor-pointer transition ease-in-out hover:scale-110 hover:bg-blue-100 hover:font-bold hover:drop-shadow-2xl shadow-black rounded-md">
                  <Link to="/register">REGISTER</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
