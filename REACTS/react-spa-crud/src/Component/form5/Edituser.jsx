import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "./UserForm";

const Edituser = () => {
  const [user, setUser] = useState({
    username: "",
      password: "",
      email: "",
      me: "",
      finding: "",
      date: "",
      height: "",
      weight: ""
  });
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3202/surya/" + params.id)
      .then((data) => data.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  const handleChange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const updateUser = () => {
    fetch("http://localhost:3202/surya/" + params.id, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="container">
      <h2>Welcome to Edit User</h2>
      <UserForm
        user={user}
        handleChange={handleChange}
        btnText="Update User"
        handleSubmit={updateUser}
      />
    </div>
  );
};

export default Edituser;
