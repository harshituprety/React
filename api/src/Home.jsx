import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        console.log("Response:", res.data);
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-white h-screen">
      <h1 className="text-2xl font-semibold">List of Users:</h1>
      <div className="w-75 rounded bg-white border shadow p-4 m-4">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => {
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.city}</td>
                <td>{d.phone}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
