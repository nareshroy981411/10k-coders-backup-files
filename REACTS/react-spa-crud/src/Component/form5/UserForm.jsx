import React from "react";

const UserForm = ({handleChange,user,handleSubmit,btnText}) => {
  return (
    <div>
      <form>
            <legend></legend>
          <label htmlFor="">Username : </label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <label htmlFor="">Password: </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <label htmlFor="">Email : </label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <label htmlFor="me">Me : </label>
             <select id="me" 
               name="me"
               value={user.me}
               onChange={(e) => {
                 handleChange(e);
               }}>
            <option value="Iam a Men">Iam a Men</option>
            <option value="Iam a Men">Iam a Men</option>
            <option value="Iam aWomen">Iam aWomen</option>
            <option value="none">none</option>
            </select>
          <br />
          <label htmlFor="finding">Finding :</label>
          <select id="finding" name="finding"
               value={user.finding}
               onChange={(e) => {
                 handleChange(e);
               }}>
            <option value="finding for women">finding for women</option>
            <option value="finding for women">finding for women</option>
            <option value="finding for men">finding for men</option>
            <option value="3">Three</option>
          </select>
          <br /> 
          <label htmlFor=""> Date of Birth : </label>
          <input
            type="date"
            name="date"
            value={user.date}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <label htmlFor="">Height : </label>
          <input 
            id="outputNumbers"
            type="number"
            name="height"
            value={user.height}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <br />
          <label htmlFor=""> Weight : </label>
          <input
            type="outputKilograms"
            name="weight"
            value={user.weight}
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