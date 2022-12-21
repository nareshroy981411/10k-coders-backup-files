import React, { Component } from "react";

export default class Task4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Address: {
        street: "",
        st2: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
      },
      allUsers: [
      ],
      editIndex: null,
    };
  }
  handleChange = (e) => {
    var newAddress = { ...this.state.Address };
    newAddress[e.target.name] = e.target.value;
    this.setState({ Address: newAddress });
    // console.log(e)
    // console.log("Names :- ",e.target.name)
    // console.log("Values :- ",e.target.value)
  };
  addUser = () => {
    console.log(this.state.Address);
    var newAllUsers = [...this.state.allUsers];
    newAllUsers.push(this.state.Address);
    this.setState({ allUsers: newAllUsers });
    this.clearForm();
  };
  clearForm = () => {
    var newForm = {
        street: "",
        st2: "",
        city: "",
        state: "",
        zipcode: "",
        country: ""
    };
    this.setState({ Address: newForm });
  };

  editUser = (usr, i) => {
    this.setState({ Address: usr, editIndex: i });
  };

  deleteUser = (usr) => {
    var latestUsers = this.state.allUsers.filter(
      (myUser) => myUser.country !== usr.country
    );
    this.setState({ allUsers: latestUsers });
  };

  updateUser = () => {
    var latestUsers = [...this.state.allUsers];
    latestUsers[this.state.editIndex] = this.state.Address;
    this.setState({allUsers:latestUsers,editIndex:null});
    this.clearForm()
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="">Street : </label>
          <input
            type="tel"
            name="street"
            value={this.state.Address.street}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br /><label htmlFor="">St2 : </label>
          <input
            type="tel"
            name="st2"
            value={this.state.Address.st2}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">City : </label>
          <input
            type="tel"
            name="city"
            value={this.state.Address.city}
            onChange={(e) => {
              this.handleChange(e);
            }}
        />{" "}
        <br />
        <label htmlFor="">State : </label>
        <input
        type="tel"
        name="state"
        value={this.state.Address.state}
        onChange={(e) => {
          this.handleChange(e);
        }}
    />{" "}
          <br />
          <label htmlFor="">Zip Code : </label>
          <input
            type="number"
            name="zipcode"
            value={this.state.Address.zipcode}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Country : </label>
          <input
            type="text"
            name="country"
            value={this.state.Address.country}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          {this.state.editIndex !== null ? (
            <button
              type="button"
              onClick={this.updateUser}
              className="btn btn-primary"
            >
              Update User
            </button>
          ) : (
            <button
              type="button"
              onClick={this.addUser}
              className="btn btn-primary"
            >
              Add User
            </button>
          )}
        </form>
        <hr />
        <table className="table" border={1}>
          <thead>
            <tr>
              <th>Street</th>
              <th>St2</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
              <th>Country</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.street}</td>
                <td>{usr.st2}</td>
                <td>{usr.city}</td>
                <td>{usr.state}</td>
                <td>{usr.zipcode}</td>
                <td>{usr.country}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      this.editUser(usr, i);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.deleteUser(usr);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
