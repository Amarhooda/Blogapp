import React from "react";
import app from "../Components/pages/posts/App.css";
import * as Unicons from "@iconscout/react-unicons";
function Sidebar() {
  return (
    <div className="flex-[3] sidebar m-[20px] mr-6">
      <div className="flex flex-col mt-4 items-center">
        <span className="my-2 text-xl font-medium p-[5px] border-y-2 border-black">
          About Me
        </span>
        <img
          src="https://source.unsplash.com/random/?Nature,Tech/1920*1080"
          alt="Imagehere"
          className="w-[450px] h-[250px] rounded object-cover"
        />
        <p className="w-[95%] my-1 py-1 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          magni rem non repellat assumenda iste voluptas, voluptatum modi.
          Itaque sapiente laboriosam quisquam eos voluptates error animi
          doloremque inventore, autem, architecto cumque perferendis impedit ab.
          Ex corrupti sunt rerum beatae tempora. Ut, provident maiores at dolore
          architecto commodi pariatur porro est.
        </p>
      </div>
      <div className="flex flex-col items-center mt-4 font-[Josefin] w-[98%]">
        <span className="text-2xl mt-2 font-medium p-[5px] border-y-2 border-black ">
          Categories
        </span>
        <ul className="text-xl">
          <li className="mt-3 px-[7px] rounded-md cursor-pointer transition ease-in-out hover:text-blue-400 hover:scale-110">
            Life
          </li>
          <li className="mt-3 px-[7px] rounded-md cursor-pointer transition ease-in-out hover:text-blue-400 hover:scale-110">
            Music
          </li>
          <li className="mt-3 px-[7px] rounded-md cursor-pointer transition ease-in-out hover:text-blue-400 hover:scale-110">
            Tech
          </li>
          <li className="mt-3 px-[7px] rounded-md cursor-pointer transition ease-in-out hover:text-blue-400 hover:scale-110">
            Sport
          </li>
          <li className="mt-3 px-[7px] rounded-md cursor-pointer transition ease-in-out hover:text-blue-400 hover:scale-110">
            Cinema
          </li>
          <li className="mt-3 px-[7px] rounded-md cursor-pointer transition ease-in-out  hover:text-blue-400 hover:scale-110">
            Style
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center font-[Poppins] mt-8 w-[98%]">
        <span className="text-xl mt-5 font-medium p-[5px] border-y-2 border-black ">
          Contact
        </span>
        <div className="topLeft my-2">
          <Unicons.UilFacebook
            className=" mx-2 cursor-pointer transition ease-in-out hover:scale-125"
            size={30}
          />
          <Unicons.UilTwitter
            className=" mx-2 cursor-pointer transition ease-in-out hover:scale-125"
            size={30}
          />
          <i className="fa-brands cursor-pointer fa-pinterest mx-2 transition ease-in-out hover:scale-125 text-2xl"></i>
          <Unicons.UilInstagram
            className=" mx-2 cursor-pointer transition ease-in-out hover:scale-125"
            size={30}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
