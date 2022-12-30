import React from "react";

function Singlepost() {
  return (
    <div className="">
      <div className="text-center max-md:mx-3 p-5">
        <img
          src="https://source.unsplash.com/random/?Nature,Tech/2560*1440"
          alt="Imagehere"
          className=" w-full h-80 rounded-lg object-cover"
        />
        <h1 className="text-center m-2 text-2xl font-bold">
          Lorem ipsum dolor sit amet
          <hr />
        </h1>
        <div className="max-md:flex max-md:justify-between">
          <i className="float-right text-2xl mx-2 text-red-500 cursor-pointer transition ease-in-out hover:scale-110 far fa-trash-alt"></i>
          <i className="float-right text-2xl mx-5 text-teal-500 cursor-pointer transition ease-in-out hover:scale-110 far fa-edit"></i>
        </div>
        <div className="my-5 flex justify-around">
          <span>
            Author: <b>AHJ</b>
            <hr />
          </span>{" "}
          <span>
            1 day ago
            <hr />
          </span>
        </div>
        <p className="text-justify first-letter:text-3xl font-medium  max-md:mx-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci,
          ipsa deleniti! Esse facere voluptate earum, iusto in, minima,
          molestias sit magnam impedit quod eaque? Explicabo placeat dolore
          delectus sunt enim eveniet ad qui ipsum eos. Libero, earum ipsa
          sapiente, totam unde nihil, eos rem eligendi at aliquam id commodi vel
          quo temporibus repellat laboriosam voluptatibus modi magni inventore.
          Numquam fugiat blanditiis veritatis perspiciatis aut similique
          officiis totam, vitae rerum ipsa provident magni nihil doloribus neque
          delectus fugit! Molestias, atque. Corrupti, omnis fuga accusantium
         
        </p>
      </div>
    </div>
  );
}

export default Singlepost;
