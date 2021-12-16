import axios from "axios";
import React from "react";

const baseURL = "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <img src={post.imageUrl} alt="img"></img>
      <h1>{post.name}</h1>
      <p>{post.title}</p>
    </div>
  );
}