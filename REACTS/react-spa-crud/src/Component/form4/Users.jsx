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
        const response = await (await fetch("http://localhost:3202/karn")).json()
        setUsers (response)
    }
  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
              <th>Id</th>
              <th>STREET:</th>
              <th>ST2:</th>
              <th>CITY</th>
              <th>STATE</th>
              <th>ZIPCODE</th>
              <th>COUNTRY</th>
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