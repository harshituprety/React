import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const AxiosLearn = () => {
  const [userdata, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((respone) => {
      console.log(respone);
      setData(respone.data);
    });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: "100vw",
        height: "100vh",
        margin: "0px",
        padding: "0px",
        textAlign: "center",
        fontSize: "30px",
      }}
    >
      Axios
      <h1 style={{ fontSize: "25px" }}>
        {userdata.map((data) => {
          return <div>{data.name}</div>;
        })}
      </h1>
    </div>
  );
};

export default AxiosLearn;
