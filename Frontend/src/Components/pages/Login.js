import React from 'react'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-screen text-center flex flex-col items-center m-auto w-full bg-gradient-to-r from-sky-500 to-indigo-500 bg-cover">
      <span className="mt-5 text-4xl font-bold shadow-black drop-shadow-2xl text-white">
        Login
      </span>
      <div className="w-96 mt-8 hover:drop-shadow-2xl hover:scale-105 transition ease-in-out  flex flex-col items-center justify-center h-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl ">
        <form className="flex flex-col items-center">
          <label htmlFor="email">Email</label>
          <input
            className="w-64 hover:drop-shadow-2xl  hover:scale-105 transition ease-in-out outline-none rounded-lg p-1 self-center"
            type="email"
            placeholder="Enter Your Email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="w-64 hover:drop-shadow-2xl  hover:scale-105 transition ease-in-out outline-none rounded-lg p-1 self-center"
            type="password"
            placeholder="Enter Your Password"
          />
          <button className="bg-yellow-200 my-4 px-5 py-1 border-none text-xl rounded cursor-pointer font-bold transition ease-in-out hover:scale-110 hover:shadow-md hover:shadow-black">Login</button>
        </form>
        <button className="mt-2 bg-amber-500 px-5 py-1 border-none rounded cursor-pointer transition ease-in-out hover:scale-110 hover:shadow-md hover:shadow-black">
          {" "}
          <Link to="/register"> New? Register Here</Link>
        </button>
      </div>
    </div>
  );
}

export default Login