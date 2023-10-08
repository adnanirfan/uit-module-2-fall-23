"use client";
import { useEffect, useState } from "react";

function Post(props) {
  const [post, setPost] = useState({});
  const [loader, setLoader] = useState(false);
  console.log("PROPS: ====> ", props);

  function getPostDetails(postId) {
    setLoader(true);
    const url = "https://jsonplaceholder.typicode.com/posts/" + postId;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPost(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoader(false));
  }

  useEffect(() => {
    getPostDetails(props.params.postId);
  }, []);

  return (
    <div>
      <h1>POST</h1>
      {loader ? <h2>Loading...</h2> : false}
      <p>Post Id: {post.id}</p>
      <p>Post Title: {post.title}</p>
      <p>Post User Id: {post.userId}</p>
      <p>Post Body: {post.body}</p>
    </div>
  );
}

export default Post;
