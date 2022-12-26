import React from "react";

const UserForm = ({handleChange,user,handleSubmit,btnText}) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            value={user.name}
            name="name"
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
            value={user.username}
            name="username"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
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
          <label htmlFor="exampleInputEmail1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={user.password}
            name="password"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            ConfirmPSW
          </label>
          <input
            type="confirmPSW"
            className="form-control"
            value={user.confirmPSW}
            name="confirmPSW"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Message
          </label>
          <textarea
            type="message"
            className="form-control"
            value={user.message}
            name="message"
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