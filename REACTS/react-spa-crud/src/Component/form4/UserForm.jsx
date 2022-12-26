import React from "react";

const UserForm = ({handleChange,user,handleSubmit,btnText}) => {
  return (
    <div>
      <form>
          <label htmlFor="">Street : </label>
          <input
            type="tel"
            name="street"
            value={user.street}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <label htmlFor="">St2 : </label>
          <input
            type="tel"
            name="st2"
            value={user.st2}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <label htmlFor="">City : </label>
          <input
            type="tel"
            name="city"
            value={user.city}
            onChange={(e) => {
              handleChange(e);
            }}
        />
        <br />
        <label htmlFor="">State : </label>
        <input
        type="tel"
        name="state"
        value={user.state}
        onChange={(e) => {
          handleChange(e);
        }}
    />
          <br />
          <label htmlFor="">Zip Code : </label>
          <input
            type="number"
            name="zipcode"
            value={user.zipcode}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <label htmlFor="">Country : </label>
          <input
            type="text"
            name="country"
            value={user.country}
            onChange={(e) => {
              handleChange(e);
            }}
          />

        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default UserForm;