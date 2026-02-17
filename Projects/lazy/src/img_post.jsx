import { useState, useEffect } from "react";

const Img_post = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  });

  return (
    <div className="container">
      <h1 className="text-center">Post images</h1>
      <div className="container flex flex-col gap-30 ">
        {post.map((post) => {
          <lazyload key={post.id} title={post.title} img={post.url} />;
        })}
      </div>
    </div>
  );
};

export default Img_post;
