import { Component } from "react";

export class MainClassComp extends Component{
constructor(){
    super ()
    this.state={
        fullname: "Murali Krishna",
    
     person: {
        fname:"Ram",
        lname:"Ravi",
        email:"ravan@gmail.com"
    },
    users: ["Ramesh","Ravi","SAM","ravan"]
}
}

    render(){
        return <div>
            <h2>Welcome to {this.state.fullname}</h2>
            <hr />
            <ul>
                {/* <li>{this.state.users[0]}</li>
                <li>{this.state.users[1]}</li>
                <li>{this.state.users[2]}</li> */}
                {this.state.users.map((value)=>{
                    return <li>{value}</li>
                })}
            </ul>
            <hr />
            <ul>
                <li>{this.state.person.fname}</li>
                <li>{this.state.person.lname}</li>
                <li>{this.state.person.email}</li>
            </ul>
        </div>
    }
}