import { Component } from "react";
import axios from "axios";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      About: {
        id: "",
        firstname: "",
        lastname: "",
        dateofBirth: "",
        EmailId: "",
        MobileNumber: "",
      },
      allAbout: [],
      editIndex: null,
    };
  }
  getData = () => {
    // let response=await axios.get("http://localhost:3303/person")
    // this.setState({allAbout:response.data})
    axios.get("http://localhost:3303/person").then((res) => {
      this.setState({ allAbout: res.data });
    });
  };
  handleChange = (e) => {
    var newAbout = { ...this.state.About };
    newAbout[e.target.name] = e.target.value;
    this.setState({ About: newAbout });
  };
  addPerson = () => {
    axios({
      method: "POST",
      url: "http://localhost:3303/person/",
      data: this.state.About,
      headers: {
        "content-Type": "application/json",
      },
    }).then(() => {
      this.getData();
    });
    this.ClearForm();
  };
  ClearForm = () => {
    var clean = {
      id: "",
      firstname: "",
      lastname: "",
      dateofBirth: "",
      EmailId: "",
      MobileNumber: "",
    };
    this.setState({ About: clean });
  };

  deletePerson = (pers) => {
    axios.delete("http://localhost:3303/person/" + pers.id).then(() => {
      this.getData();
    });
  };
  editPerson = (pers, i) => {
    this.setState({ About: pers, editIndex:i });
  };
  updatePerson=()=>{
    axios({
        method: "PUT",
        url: "http://localhost:3303/person/"+
        this.state.About.id,
        data:this.state.About,
        headers: {
          "content-Type": "application/json",
        },

    }).then(()=>{
        this.getData()
    });
    this.setState({editIndex:null})
    this.ClearForm();
  
  }

  render() {
    const { id, firstname, lastname, dateofBirth, EmailId, MobileNumber } =
      this.state.About;
    return (
      <div>
        <form>
          <label htmlFor="">Id</label>
          <input
            type="text"
            name="id"
            value={id}
            disabled
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">firstname</label>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Lastname</label>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">DateofBirth</label>
          <input
            type="date"
            name="dateofBirth"
            value={dateofBirth}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">EmailId</label>
          <input
            type="email"
            name="EmailId"
            value={EmailId}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">MobileNumber</label>
          <input
            type="tel"
            name="MobileNumber"
            value={MobileNumber}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          {this.state.editIndex !==null ?  <button
            type="button"
            className="btn btn-secondary"
            onClick={this.updatePerson}
          >
            UpdatePerson
          </button>: <button
            type="button"
            className="btn btn-primary"
            onClick={this.addPerson}
          >
            AddPerson
          </button>}
          {/* <button
            type="button"
            className="btn btn-primary"
            onClick={this.addPerson}
          >
            AddPerson
          </button>
          <button
            type="button"
            className="btn btn-Secondary"
            onClick={this.updatePerson}
          >
            UpdatePerson
          </button> */}
        </form>
        <hr />
        <table className="table  mt-3">
          <thead>
            <tr>
              <th>id</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>DateOfBirth</th>
              <th>EmailId</th>
              <th>MobileNumber</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allAbout.map((pers, i) => (
              <tr key={i}>
                <td>{pers.id}</td>
                <td>{pers.firstname}</td>
                <td>{pers.lastname}</td>
                <td>{pers.dateofBirth}</td>
                <td>{pers.EmailId}</td>
                <td>{pers.MobileNumber}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => {
                      this.editPerson(pers, i);
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
                      this.deletePerson(pers);
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
    let response = await axios.get("http://localhost:3303/person");
    this.setState({ allAbout: response.data });
  }
}
export default Person;