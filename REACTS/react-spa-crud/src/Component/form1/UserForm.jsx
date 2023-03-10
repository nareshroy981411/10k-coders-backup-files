import React from "react";

const UserForm = ({handleChange,user,handleSubmit,btnText}) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            value={user.fname}
            name="fname"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            value={user.lname}
            name="lname"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            DATE
          </label>
          <input
            type="date"
            className="form-control"
            value={user.date}
            name="date"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={user.email}
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Mobile
          </label>
          <input
            type="mobile"
            className="form-control"
            value={user.mobile}
            name="mobile"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default UserForm;