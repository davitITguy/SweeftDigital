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
        <div className="singleUserMain">
            <div className="userImg">
                <img src={post.imageUrl} alt="img"></img>
            </div>
            <div className="singleUserInfo">
                <h1>{post.name}</h1>
                <p>{post.title}</p>
                <p>Email: {post.email}</p>
                <p>Ip Adress: {post.ip}</p>
                <p>Ip Adress: {post.ip}</p>
                <p>Job Areas: {post.jobArea}</p>
                <p>Job Type: {post.jobType}</p>
            </div>
            <div className="singleUserAdress">
                <h1>{post.name}</h1>
                <p>{post.name}</p>
                
            </div>
        </div>
    </div>
  );
}