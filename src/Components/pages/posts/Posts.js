import React from "react";
import app from "./App.css"
function Posts() {
  return (
    <div >
      <div className="w-[450px] post mx-5 flex flex-col mb-4">
        <img 
          src="https://source.unsplash.com/random/?Nature,Tech,Cryptocurrency/"
          alt="Imagehere"
          className="w-[450px] post h-[280px] rounded object-cover"
        />
        <div className="flex flex-col items-center">
          <div className="my-2">
            <span className="mt-4 cursor-pointer mr-3">Music</span>
            <span className="mt-4 cursor-pointer mr-3">Life</span>
          </div>
          <span className="text-xl font-bold mt-3 cursor-pointer">
            Lorem ipsum dolor sit amet
          </span>
         
        </div>
        <p className="leading-6 mt-4 overflow-hidden text-ellipsis text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
          fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
          atque, exercitationem quibusdam, reiciendis odio laboriosam?
        </p>
        <span className="mt-4">1 hour ago</span>
      </div>
    </div>
  );
}

export default Posts;
