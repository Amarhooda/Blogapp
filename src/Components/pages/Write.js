import React from "react";

function Write() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          src="https://source.unsplash.com/random/?Nature,Water/"
          alt="nature"
          className="w-[70vw] rounded-md h-[250px] mt-8 object-cover"
        />
      </div>
      <form className="mt-2">
        <div className="ml-40 mt-3 flex items-center">
          <label htmlFor="fileInput">
            <i className="w-7 h-7 text-xl border border-blue-300 rounded-md flex items-center justify-center cursor-pointer fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            type="text"
            className="text-3xl border-none p-5 w-[70vw] placeholder:font-normal"
            autoFocus={true}
            placeholder="Title"
          />
        </div>
        <div className="ml-40 flex mt-3 items-center">
          <textarea
            className="border-none p-5 w-[70vw] placeholder:font-normal h-screen text-xl"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          ></textarea>
        </div>
        <div className="absolute top-80 right-12">
          <button
            type="submit"
            className=" text-white bg-purple-500 px-5 py-1 border-none text-xl rounded cursor-pointer font-bold transition ease-in-out hover:scale-110 hover:shadow-md hover:shadow-black"
          >
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}

export default Write;
