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
        const response = await (await fetch("http://localhost:3202/users")).json()
        setUsers (response)
    }
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                <th>#</th>
                <th>First Nmae</th>
                <th>Last Name</th>
                <th>Date</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>EDIT</th>
                <th>DELETE</th>
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