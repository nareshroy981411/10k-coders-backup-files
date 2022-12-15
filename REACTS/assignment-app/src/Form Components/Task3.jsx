import React, { Component } from "react";

export default class Task3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        name: "",
        username: "",
        email: "",
        password: "",
        conformPSW: "",
        message: ""
      },
      allUsers: [
      ],
      editIndex: null,
    };
  }
  handleChange = (e) => {
    var newPerson = { ...this.state.person };
    newPerson[e.target.name] = e.target.value;
    this.setState({ person: newPerson });
    // console.log(e)
    // console.log("Names :- ",e.target.name)
    // console.log("Values :- ",e.target.value)
  };
  addUser = () => {
    console.log(this.state.person);
    var newAllUsers = [...this.state.allUsers];
    newAllUsers.push(this.state.person);
    this.setState({ allUsers: newAllUsers });
    this.clearForm();
  };
  clearForm = () => {
    var newForm = {
      name: "",
      username: "",
      email: "",
      password: "",
      conformPSW: "",
      message: ""
    };
    this.setState({ person: newForm });
  };

  editUser = (usr, i) => {
    this.setState({ person: usr, editIndex: i });
  };

  deleteUser = (usr) => {
    var latestUsers = this.state.allUsers.filter(
      (myUser) => myUser.email !== usr.email
    );
    this.setState({ allUsers: latestUsers });
  };

  updateUser = () => {
    var latestUsers = [...this.state.allUsers];
    latestUsers[this.state.editIndex] = this.state.person;
    this.setState({allUsers:latestUsers,editIndex:null});
    this.clearForm()
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="">Name : </label>
          <input
            type="text"
            name="name"
            value={this.state.person.name}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="Last Name :">Username : </label>
          <input
            type="text"
            name="username"
            value={this.state.person.username}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Email : </label>
          <input
            type="text"
            name="email"
            value={this.state.person.email}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Password : </label>
          <input
            type="password"
            name="password"
            value={this.state.person.password}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Confirm PSW : </label>
          <input
            type="password"
            name="confirmPSW"
            value={this.state.person.confirmPSW}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Message : </label>
          <textarea
            name="message"
            value={this.state.person.message}
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
              <th>Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm PSW</th>
              <th>Message</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.name}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>{usr.password}</td>
                <td>{usr.conformPSW}</td>
                <td>{usr.message}</td>
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
