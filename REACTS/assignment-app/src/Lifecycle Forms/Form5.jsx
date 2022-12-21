import React, { Component } from "react";
import axios from "axios";

export default class Tender extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tender: {
        id: "",
        username: "",
        password: "",
        EmailAddress: "",
        self: "",
        finding: "",
        Dateofbirth: "",
        Height: "",
        Weight: "",
      },
      alltender: [],
      editIndex: null,
    };
  }
  handleChange = (e) => {
    var newtender = { ...this.state.tender };
    newtender[e.target.name] = e.target.value;
    this.setState({ tender: newtender });
  };
  addtender = () => {
    axios({
      method: "POST",
      url: "http://localhost:3303/tender",
      data: this.state.tender,
      headers: {
        "content-Type": "application/json",
      },
    }).then((res) => {
      this.getdata();
    });
    this.clearForm();
  };

  clearForm = () => {
    var clean = {
      id: "",
      username: "",
      password: "",
      EmailAddress: "",
      self: "",
      finding: "",
      Dateofbirth: "",
      Height: "",
      Weight: "",
    };
    this.setState({ tender: clean });
  };
  deletetender = (use) => {
    axios.delete(" http://localhost:3303/tender/" + use.id).then(() => {
      this.getdata();
    });
  };
  getdata = () => {
    axios.get("http://localhost:3303/tender").then((res) => {
      this.setState({ alltender: res.data });
    });
  };
  edittender = (use, i) => {
    this.setState({ tender: use, editIndex: i });
  };
  updatetender = () => {
    axios({
      method: "PUT",
      url: "http://localhost:3303/tender/" + this.state.tender.id,
      data: this.state.tender,
      headers: {
        "content-Type": "application/json",
      },
    }).then(() => {
      this.getdata();
    });
    this.setState({ editIndex: null });
   this.clearForm();
  };
  render() {
    const {
      id,
      username,
      password,
      EmailAddress,
      self,
      finding,
      Dateofbirth,
      Height,
      Weight,
    } = this.state.tender;
    return (
      <div>
        <form>
          <label htmlFor="">Id</label>
          <input
            type="text"
            name="id"
            value={id}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <label htmlFor="">UserName</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Pasword</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <label htmlFor="">EmailAddress</label>
          <input
            type="text"
            name="EmailAddress"
            value={EmailAddress}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <label htmlFor="">Who Are U</label>
          <select
            name="self"
            value={self}
            onChange={(e) => {
              this.handleChange(e);
            }}
          >
            <option value={""}>SelectOption</option>
            <option value={"I am Women"}> I am Women</option>
            <option value={"I am Man"}> I am Man</option>
          </select>
          <br />
          <label htmlFor="">Who Want U</label>
          <select
            name="finding"
            value={finding}
            onChange={(e) => {
              this.handleChange(e);
            }}
          >
            <option value={""}>SelectOption</option>
            <option value={"i want Women"}>i want Women</option>
            <option value={"i want Men"}>i want men</option>
          </select>
          <br />
          <label htmlFor=""> Date of Birth : </label>
          <input
            type="date"
            name="Dateofbirth"
            value={Dateofbirth}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Height</label>
          <select
            name="Height"
            value={Height}
            onChange={(e) => {
              this.handleChange(e);
            }}
          >
            <option value={""}>selectFeet</option>
            <option value={"1Feet"}>1Feet</option>
            <option value={"2Feet"}>2Feet</option>
            <option value={"3Feet"}>3Feet</option>
            <option value={"4Feet"}>4Feet</option>
            <option value={"5Feet"}>5Feet</option>
            <option value={"6Feet"}>6Feet</option>
          </select>
          <label htmlFor="">Weight</label>
          <select
            name="Weight"
            value={Weight}
            onChange={(e) => {
              this.handleChange(e);
            }}
          >
            <option value={""}>selectKgs</option>
            <option value={"10kgs"}>10kgs</option>
            <option value={"20kgs"}>20kgs</option>
            <option value={"30kgs"}>30kgs</option>
            <option value={"40kgs"}>4okgs</option>
            <option value={"50kgs"}>50kgs</option>
            <option value={"60kgs"}>6okgs</option>
          </select>
          <br />
          {this.state.editIndex !== null ? (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.updatetender}
            >
              Updatetender
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addtender}
            >
              Addtender
            </button>
          )}
          {/* <button type="button" className="btn btn-primary" onClick={this.addtender} >Addtender</button>
          <button type="button" className="btn btn-secondary" onClick={this.updatetender} >Updatetender</button> */}
        </form>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>UserName:</th>
              <th>Password:</th>
              <th>EmailAddress</th>
              <th>Who Are U</th>
              <th>Who Want U</th>
              <th>Date Of Birth</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.alltender.map((use, i) => (
              <tr key={i}>
                <td>{use.id}</td>
                <td>{use.username}</td>
                <td>{use.password}</td>
                <td>{use.EmailAddress}</td>
                <td>{use.self}</td>
                <td>{use.finding}</td>
                <td>{use.Dateofbirth}</td>
                <td>{use.Height}</td>
                <td>{use.Weight}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      this.edittender(use, i);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      this.deletetender(use);
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
  async componentDidMount() {
    let response = await axios.get("http://localhost:3303/tender");
    this.setState({ alltender: response.data });
  }
}