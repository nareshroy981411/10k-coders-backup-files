import { useReducer } from "react";
import { Component } from "react";
import Recipie from "./Recipie";
import axios from 'axios'

export default class User extends Component {
    constructor(props) {
        super(props)

        this.state ={
            recipies : []
        }
    }
    render() {
        return(
            <div className="container" style={{display : "flex"}}>
                {this.state.recipies.map((usr,i)=> <Recipie key={i} {...usr} RecipieDetails ={usr}/>)}
            </div>
        )
    }
    async componentDidMount(){
         // fetch with await
        // let data = await (await fetch("http://localhost:30001/recipes")).json()
        // console.log(data)
        // this.setState({recipies:data})

        // Axios
        // axios.get("http://localhost:30001/recipes").then((res)=>{
        //     console.log(res)
        // })

        // Axios with await
        let data = await axios.get("http://localhost:30001/recipes")
        // console.log(response)
        this.setState({recipies:data.data})
    }
}