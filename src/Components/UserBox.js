
import axios from "axios";
import React from "react";

const baseURL = "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1";

export default function UserBox() {
  const [get, setGet] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGet(response.data);
    });
  }, []);

  if (!get) return null;

  return (
    <div>
    <div className='container'>
        <div className="row">
            <div className='UserBox'>
                <img className='userImg' src='response.imageUrl'></img>
                <p className='header'>
                    {response.data}
                </p>
                <p className='subHeader'>
                    {response.imageUrl}
                    {get.imageUrl}
                </p>
            </div>

        </div>
    </div>
</div>
  );
}