import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const UserList = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUser(res.data);
    });
  }, []);
  return (
    <div>
      {user.map((el) => (
        <div key={el.id}  className="user">
          <h1>
            <span>el Name:</span> {el.username}
          </h1>
          <h1>
            <span>Address:</span> {el.address.street}
            {el.address.suite}
            {el.address.zipcode}
            {el.address.city}
          </h1>
          <h1>
            <span>Company:</span> {el.company.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default UserList;
