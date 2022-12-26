import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import User from "./User";

const Deleteuser = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch("http://localhost:3202/surya/"+params.id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);
  const confirmDelete = () => {
    fetch("http://localhost:3202/karn/"+params.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <ul>
         <li>{user.username}</li>
         <li>{user.password}</li>
         <li>{user.email}</li>
         <li>{user.me}</li>
         <li>{user.finding}</li>
         <li>{user.date}</li>
         <li>{user.height}</li>
         <li>{user.weight}</li>
      </ul>
      <button className="btn btn-danger" onClick={confirmDelete}>
        Confirm Delete
      </button>
    </div>
  );
};

export default Deleteuser;