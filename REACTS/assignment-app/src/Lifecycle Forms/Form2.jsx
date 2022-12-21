import { Component } from "react";
import axios from "axios";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: "",
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        Average: "",
        Experience: "",
        website: "",
      },
      allform: [],
      editIndex: null,
    };
  }
  handleChange = (e) => {
    var newform = { ...this.state.form };
    newform[e.target.name] = e.target.value;
    this.setState({ form: newform });
  };
  getData = () => {
    axios.get("http://localhost:3303/registration").then((res) => {
      this.setState({ allforms: res.data });
    });
  };
  AddColleg = () => {
    axios({
      method: "POST",
      url: "http://localhost:3303/registration",
      data: this.state.form,
      headers: {
        "content-Type": "application/json",
      },
    }).then((res) => {
      this.getData();
    });
    this.clearForm();
  };
  clearForm = () => {
    var clear = {
      id: "",
      university: "",
      institute: "",
      branch: "",
      degree: "",
      status: "",
      Average: "",
      Experience: "",
      website: "",
    };
    this.setState({ form: clear });
  };
  deleteform = (mycol) => {
    axios
      .delete("http://localhost:3303/registration/" + mycol.id)
      .then((res) => {
        this.getData();
      });
  };
  editform = (mycol, i) => {
    this.setState({ form: mycol, editIndex: i });
  };
  Updateform = () => {
    axios({
      method: "PUT",
      url: "http://localhost:3303/registration/" + this.state.form.id,
      data: this.state.form,
      headers: {
        "content-Type": "application/json",
      },
    }).then(() => {
      this.getData();
    });
    this.setState({editIndex: null });
    this.clearForm();
  };
  render() {
    const {
      id,
      university,
      institute,
      branch,
      degree,
      status,
      Average,
      Experience,
      website,
    } = this.state.form;
    return (
      <div>
        <label htmlFor="">Id:</label>
        <input
          type="number"
          name="id"
          disabled
          value={id}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <label htmlFor="">University:</label>
        <input
          type="text"
          name="university"
          value={university}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <label htmlFor="">institute</label>
        <input
          type="text"
          name="institute"
          value={institute}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <label htmlFor="">Branch : </label>
        <select type="text" name="branch" value={branch} onChange={(e) => { this.handleChange(e)}}>
          <option value={""}>Open this select menu</option>
          <option value={"Accounts"}>Accounts</option>
          <option value={"Commerce"}>Commerce</option>
          <option value={"economics"}>economics</option>
        </select>
        <br />
        <label htmlFor="">Degree : </label>
        <select type="text" name="degree" value={degree} onChange={(e) => { this.handleChange(e)}}>
          <option value={""}>Open this select menu</option>
          <option value={"bcom"}>BCom</option>
          <option value={"bech"}>B.Tech</option>
          <option value={"mtech"}>M.Tech</option>
        </select>
        <br />
        <label htmlFor="">Satus</label>
        <input
          type="radio"
          name="status"
          value={"pursuing"}
          onChange={(e) => {
            this.handleChange(e);
          }}
          checked={status === "pursuing"}
        />
        Puusuing
        <input
          type="radio"
          name="status"
          value={"Completed"}
          onChange={(e) => {
            this.handleChange(e);
          }}
          checked={status === "Completed"}
        />
        Completed
        <br />
        <label htmlFor="">Average</label>
        <input
          type="number"
          name="Average"
          value={Average}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <label htmlFor="">Experience</label>
        <input
          type="number"
          name="Experience"
          value={Experience}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        <label htmlFor="">website</label>
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => {
            this.handleChange(e);
          }}
        />
        <br />
        {this.state.editIndex !==null? <button
          type="button"
          className="btn btn-secondary"
          onClick={this.Updateform}
        >
          Update
        </button>:<button
          type="button"
          className="btn btn-primary"
          onClick={this.AddColleg}
        >
          Done
        </button>}
        {/* <button
          type="button"
          className="btn btn-primary"
          onClick={this.AddColleg}
        >
          Done
        </button>
        <button
          type="button"
          className="btn btn-Secondary"
          onClick={this.Updateform}
        >
          Update
        </button> */}
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Uiversity:</th>
              <th>Insttute:</th>
              <th>Branch</th>
              <th>Degree</th>
              <th>Satus</th>
              <th>Average</th>
              <th>Experience</th>
              <th>website</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allform.map((mycol, i) => (
              <tr key={i}>
                <td>{mycol.id}</td>
                <td>{mycol.university}</td>
                <td>{mycol.institute}</td>
                <td>{mycol.Branch}</td>
                <td>{mycol.Degree}</td>
                <td>{mycol.status}</td>
                <td>{mycol.Average}</td>
                <td>{mycol.Experience}</td>
                <td>{mycol.website}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      this.editform(mycol, i);
                    }}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      this.deleteform(mycol);
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
    // let response=axios.get("http://localhost:3303/registration").then((res)=>{
    //     this.setState({allforms:response.data})
    // })
    let response = await axios.get("http://localhost:3303/registration");
    this.setState({ allforms: response.data });
  }
}
export default Registration;