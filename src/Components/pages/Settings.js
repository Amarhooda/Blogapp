import React from "react";

function Settings() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-3/4 mt-14">
        <form className="flex flex-col">
          <div className="h-16 w-16 rounded-2xl object-cover flex">
            <img
              src="https://source.unsplash.com/random/?Nature,House/"
              alt="nature"
              className="w-28 object-cover rounded-2xl"
            />
            <label htmlFor="fileInput">
              {" "}
              <i className="w-6 h-6 p-1 border-none rounded-xl ml-3 text-white bg-black text-xl border border-blue-300 flex items-center justify-center cursor-pointer far fa-user-circle"></i>{" "}
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <div className="mt-8 flex flex-col ">
            <label className="p-2">Username</label>
            <input
              className="w-2/5 border-b-2 border-black rounded-md p-1"
              type="text"
              placeholder="AHJ"
              name="name"
            />
            <label className="p-2">Email</label>
            <input
              className="w-2/5 border-b-2 border-black rounded-md p-1"
              type="email"
              placeholder="ahj@gmail.com"
              name="email"
            />
            <label className="p-2">Password</label>
            <input
              className="w-2/5 border-b-2 border-black rounded-md p-1"
              type="passsword"
              placeholder="Password"
              name="password"
            />
            <button
              type="submit"
              className=" text-white w-44 mt-5 self-center bg-purple-500 px-5 py-1 border-none text-xl rounded cursor-pointer font-bold transition ease-in-out hover:scale-110 hover:shadow-md hover:shadow-black"
            >
              {" "}
              Update
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between flex-col mt-7">
          <span className="text-2xl mb-5 w-96 text-center hover:bg-blue-300 hover:text-black cursor-pointer text-blue-700 border-2 border-black rounded-lg p-1">
            Update Account
          </span>
          <span className="text-2xl mb-5 w-96 text-center text-red-700 border-2 border-black rounded-lg p-1 hover:bg-red-500 hover:text-black cursor-pointer">
            Delete Account
          </span>
        </div>
      </div>
    </div>
  );
}

export default Settings;
