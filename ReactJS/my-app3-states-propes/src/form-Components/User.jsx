const { Component } = require("react");

class User extends Component{
    constructor(){
        super()
        this.state={
            fname:"",
            lname:"",
            email:""
        }
        this.addUser = this.addUser.bind(this)
    }
    handleChange(e){
        var newObject = {...this.state}
        newObject[e.target.name] = e.target.value
        this.setState(newObject)
    }
    addUser(){
        console.log(this.state)
    }
    editUser=()=>{
        var newUser={
            fname:"Murali",
            lname:"Krishna",
            email:"murali@gmail.com"
        }
        this.setState(newUser)
    }
    render(){
        return <div>
            <form>
                <label htmlFor="">First Name : </label> 
                <input type="text" name="fname" value={this.state.fname} onChange={(e)=>{this.handleChange(e)}}/> <br />
                <label htmlFor="Last Name :">Last Name : </label> 
                <input type="text" name="lname" value={this.state.lname} onChange={(e)=>{this.handleChange(e)}}/> <br />
                <label htmlFor="">Email : </label>
                <input type="text" name="email" value={this.state.email} onChange={(e)=>{this.handleChange(e)}}/> <br />
                <button type="button" onClick={this.addUser}>Add User</button>
                <button type="button" onClick={this.editUser}>Edit User</button>
            </form>
        </div>
    }
}
export default User