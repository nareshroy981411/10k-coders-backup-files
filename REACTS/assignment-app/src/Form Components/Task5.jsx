import React, { Component } from "react";

export default class Task5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        username: "",
        password: "",
        email: "",
        me: "",
        finding: "",
        date: "",
        height: "",
        weight: ""
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
        username: "",
        password: "",
        email: "",
        me: "",
        finding: "",
        date: "",
        height: "",
        weight: ""
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
            <legend></legend>
          <label htmlFor="">Username : </label>
          <input
            type="text"
            name="username"
            value={this.state.person.username}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Password: </label>
          <input
            type="password"
            name="password"
            value={this.state.person.password}
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
          <label htmlFor="me">Me : </label>
             <select id="me" 
               name="me"
               value={this.state.person.me}
               onChange={(e) => {
                 this.handleChange(e);
               }}>{" "}
            <option value="Iam a Men">Iam a Men</option>
            <option value="Iam a Men">Iam a Men</option>
            <option value="Iam aWomen">Iam aWomen</option>
            <option value="none">none</option>
            </select>
          <br />
          <label htmlFor="finding">Finding :</label>
          <select id="finding" name="finding"
               value={this.state.person.finding}
               onChange={(e) => {
                 this.handleChange(e);
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
            value={this.state.person.date}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Height : </label>
          <input 
            id="outputNumbers"
            type="number"
            name="height"
            value={this.state.person.height}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor=""> Weight : </label>
          <input
            type="outputKilograms"
            name="weight"
            value={this.state.person.weight}
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
              <th>Username</th>
              <th>Password</th>
              <th>Email address</th>
              <th>Me</th>
              <th>Finding for</th>
              <th>Date of Birth</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.username}</td>
                <td>{usr.password}</td>
                <td>{usr.email}</td>
                <td>{usr.me}</td>
                <td>{usr.finding}</td>
                <td>{usr.date}</td>
                <td>{usr.height}</td>
                <td>{usr.weight}</td>
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
