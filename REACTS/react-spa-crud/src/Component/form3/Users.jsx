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
        const response = await (await fetch("http://localhost:3202/ravans")).json()
        setUsers (response)
    }
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>ConfirmPSW</th>
                <th>Message</th>
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