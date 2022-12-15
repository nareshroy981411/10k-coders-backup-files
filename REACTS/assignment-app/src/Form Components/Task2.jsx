import React, { Component } from "react";

export default class Task2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        university: "",
        institute: "",
        branch: "",
        degree: "",
        Status: "",
        avarageCPI: "",
        thsemister: "",
        experience: "",
        website: ""
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
      university: "",
      institute: "",
      branch: "",
      degree: "",
      status: "",
      avarageCPI: "",
      thsemister: "",
      experience: "",
      website: ""
    };
    this.setState({ person: newForm });
  };

  editUser = (usr, i) => {
    this.setState({ person: usr, editIndex: i });
  };

  deleteUser = (usr) => {
    var latestUsers = this.state.allUsers.filter(
      (myUser) => myUser.status !== usr.status
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
          <fieldset>
            <h1>Registration Form</h1>
          <label htmlFor="">University : </label>
          <input
            type="text"
            name="university"
            value={this.state.person.university}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="Last Name :">Institute : </label>
          <input
            type="text"
            name="institute"
            value={this.state.person.institute}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Branch : </label>
          <select name="branch" onChange={(e) => { this.handleChange(e)}}>
            <option value={""}>Open this select menu</option>
            <option value={"Accounts"}>Accounts</option>
            <option value={"Commerce"}>Commerce</option>
            <option value={"economics"}>economics</option>
          </select>
          <br />
          <label htmlFor="">Degree : </label>
          <select name="degree" value={this.state.person.degree} onChange={(e) => { this.handleChange(e)}}>
            <option value={""}>Open this select menu</option>
            <option value={"bcom"}>BCom</option>
            <option value={"bech"}>B.Tech</option>
            <option value={"mtech"}>M.Tech</option>
          </select>
          <br />
          <label htmlFor="">Completed : </label>
          <input type="radio" name="status" checked={this.state.person.status == "completed"} value= {"completed"}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "} 
          <label htmlFor="">Pursuing</label>
          <input type="radio" name="status" checked={this.state.person.status == "pursuing"} value= {"Pursuing"}
            onChange={(e) => {
              this.handleChange(e);
            }}
          /> <br/>
          <br />
          <label htmlFor=""> Avarage CPI : </label>
          <input
            type="number"
            name="avarageCPI"
            value={this.state.person.avarageCPI}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "} 
          <br />
          <label htmlFor=""> Th semister : </label>
          <input
          type="tel"
          name="thsemister"
          value={this.state.person.thsemister}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />{" "}
          <br />
          <label htmlFor=""> Experience : </label>
          <input
            type="number"
            name="experience"
            value={this.state.person.experience}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor=""> Website : </label>
          <input
            type="text"
            name="website"
            value={this.state.person.website}
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
          </fieldset>
        </form>
        <hr />
        <table className="table" border={1}>
          <thead>
            <tr>
              <th>University</th>
              <th>Institute</th>
              <th>Branch</th>
              <th>Degree</th>
              <th>Status</th>
              <th>Avarage CPI</th>
              <th>Semister</th>
              <th>Experience</th>
              <th>Website</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.university}</td>
                <td>{usr.institute}</td>
                <td>{usr.branch}</td>
                <td>{usr.degree}</td>
                <td>{usr.status}</td>
                <td>{usr.avarageCPI}</td>
                <td>{usr.thsemister}</td>
                <td>{usr.experience}</td>
                <td>{usr.website}</td>
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
