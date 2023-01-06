import React, { Component } from "react";
import { connect } from "react-redux";
import { addPersonAction } from "../store/Actions";
import PersonsTable from "./PersonsTable";

class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      number: "",
      email: "",
      bike:"",
    };
  }

  handleChange = (e) => {
    let newUser = { ...this.state };
    newUser[e.target.name] = e.target.value;
    this.setState(newUser);
  };

  addPerson = () => {
    this.props.addPerson(this.state);// from Where it is Coming ?
    this.clearPersonForm()
  };

  clearPersonForm=()=>{
    this.setState({
      name: "",
      number: "",
      email: "",
      bike:"",
      })
  }
  render() {
    console.log(this.props);

    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <form>
              <label htmlFor=""> Name : </label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="Last Name :">Phone Number : </label>
              <input
                type="num"
                name="number"
                value={this.state.number}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Email : </label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="">Bike : </label>
              <input
                type="tel"
                name="bike"
                value={this.state.bike}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />{" "}
              <br />
              <button
                type="button"
                onClick={()=>{this.addPerson()}}
                className="btn btn-primary"
              >
                Add User
              </button>
            </form>
          </div>
          <div className="col-8">
            <PersonsTable />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    allPersons: state.persons,
  };
}
// Whatever mapDispatchToProps returns , will be accessable as Props In this Component
function mapDispatchToProps(dispatch) {
  return {
    addPerson: (person) => dispatch(addPersonAction(person)), // From Where this funtion getting Dispatch Method
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);