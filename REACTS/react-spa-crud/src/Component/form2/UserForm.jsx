import React from "react";

const UserForm = ({handleChange,user,handleSubmit,btnText}) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            University :
          </label>
          <input
            type="text"
            className="form-control"
            value={user.university}
            name="university"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Institute :
          </label>
          <input
            type="text"
            className="form-control"
            value={user.institute}
            name="institute"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Branch
          </label>
          <select
            type="text"
            className="form-control"
            value={user.branch}
            name="branch"
            onChange={(e) => {
              handleChange(e);
            }}>
                <option value={""}>Open this select menu</option>
          <option value={"Accounts"}>Accounts</option>
          <option value={"Commerce"}>Commerce</option>
          <option value={"economics"}>economics</option>
            </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Degree
          </label>
          <select type="text" name="degree" value={user.degree} onChange={(e) => {handleChange(e)}}>
          <option value={""}>Open this select menu</option>
          <option value={"bcom"}>BCom</option>
          <option value={"bech"}>B.Tech</option>
          <option value={"mtech"}>M.Tech</option>
        </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputStatus" className="form-label">
            Satus
            </label>
        <input
          type="radio"
          name="status"
          className="form-label"
          value={"pursuing"}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        Puusuing
        <input
          type="radio"
          name="status"
          value={"Completed"}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        Completed
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Average
          </label>
          <input
            type="number"
            className="form-control"
            value={user.average}
            name="average"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Experience
          </label>
          <input
            type="number"
            className="form-control"
            value={user.experience}
            name="experience"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Website
          </label>
          <input
            type="url"
            className="form-control"
            value={user.website}
            name="website"
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