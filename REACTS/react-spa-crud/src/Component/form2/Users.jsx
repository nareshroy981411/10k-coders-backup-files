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
        const response = await (await fetch("http://localhost:3202/rams")).json()
        setUsers (response)
    }
  return (
    <div>
        <table className='table'>
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
                
            {users.map((person,i)=> <User usr={person} key={i}/> )}
            </tbody>
        </table>
    </div>
  )
}

export default Users