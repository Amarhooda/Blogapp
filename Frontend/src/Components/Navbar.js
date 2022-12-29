import React from 'react'
import * as Unicons from "@iconscout/react-unicons";
import "./Navbar.css"
import { Link} from "react-router-dom";
function Navbar() {
  const user =false;
  return (
    <>
      <div className="w-full h-[55px] bg-gradient-to-r from-blue-500 to-red-200 hover:drop-shadow-2xl shadow-black sticky top-0 flex items-center font-[Poppins]">
        <div className="topLeft">
          <Unicons.UilFacebook
            className=" mx-2 cursor-pointer hover:drop-shadow-2xl shadow-black transition ease-in-out hover:scale-125"
            size={30}
          />
          <Unicons.UilTwitter
            className=" mx-2 cursor-pointer hover:drop-shadow-2xl shadow-black transition ease-in-out hover:scale-125"
            size={30}
          />
          <i className="fa-brands fa-pinterest hover:drop-shadow-2xl shadow-black mx-2 cursor-pointer transition ease-in-out hover:scale-125 text-2xl"></i>
          <Unicons.UilInstagram
            className=" mx-2 cursor-pointer hover:drop-shadow-2xl shadow-black transition ease-in-out hover:scale-125"
            size={30}
          />
        </div>
        <div className="topCenter bg-slate-200 p-1 rounded-lg">
          <ul className="flex font-mrdium">
            <li className="px-8 cursor-pointer transition ease-in-out hover:scale-110 hover:bg-blue-100 hover:font-bold hover:drop-shadow-2xl shadow-black rounded-md">
              <Link to="/">HOME</Link>
            </li>
            <li className="px-8 cursor-pointer transition ease-in-out hover:scale-110 hover:bg-blue-100 hover:font-bold hover:drop-shadow-2xl shadow-black rounded-md">
              <Link to="/write">WRITE</Link>
            </li>
            <li className="px-8 cursor-pointer transition ease-in-out hover:scale-110 hover:bg-blue-100 hover:font-bold hover:drop-shadow-2xl shadow-black rounded-md">
              <Link to="/post">POSTS</Link>
            </li>
            <li className="px-8 cursor-pointer transition ease-in-out hover:scale-110 hover:bg-blue-100 hover:font-bold hover:drop-shadow-2xl shadow-black rounded-md">
              CONTACT
            </li>
            <li className="px-8 cursor-pointer transition ease-in-out hover:scale-110 hover:bg-blue-100 hover:font-bold hover:drop-shadow-2xl shadow-black rounded-md">
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        </div>
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
                  <li className="px-4 ml-9 cursor-pointer text-sm transition ease-in-out hover:scale-110 hover:bg-blue-100 hover:font-bold hover:drop-shadow-2xl shadow-black rounded-md">
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
    </>
  );
}

export default Navbar