import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFromServerAction } from "../store/actions/userActions";
import UsersTable from "./UsersTable";

const Users = () => {
  const dispatch = useDispatch();
  const usersDetails = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersFromServerAction());
  }, []);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-8">
          <UsersTable persons={usersDetails} />
        </div>
      </div>
    </div>
  );
};

export default Users;