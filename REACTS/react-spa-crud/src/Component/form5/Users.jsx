import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import User from "./User";

const Users = () => {
    const [users,setUsers] = useState([])
    useEffect(() =>{
    getAllUsers()
    },[])

    const getAllUsers = async () => {
        const response = await (await fetch("http://localhost:3202/surya")).json()
        setUsers (response)
    }
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
              <th>Id</th>
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
                
            {users.map((person,i)=> <User usr={person} key={i}/> )}
            </tbody>
        </table>
    </div>
  )
}

export default Users