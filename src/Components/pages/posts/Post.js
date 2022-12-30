import React from "react";
import Posts from "./Posts";

function Post() {
  return (
    <div className="flex-[9] flex flex-wrap mt-[95px] ml-5">
      <Posts />
      <Posts />
      <Posts />
      <Posts />
    </div>
  );
}

export default Post;
