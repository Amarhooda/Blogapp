import React from "react";

function Header() {
  return (
    <div className="mt-[30px]">
      <div className="flex flex-col font-[Poppins] items-center">
        <h1 className="text-3xl">React & Node Blog</h1>
      </div>
      <img
        src="https://source.unsplash.com/random/?Nature/"
        alt="nature"
        className="w-full h-[450px] mt-8 object-cover"
      />
    </div>
  );
}

export default Header;
