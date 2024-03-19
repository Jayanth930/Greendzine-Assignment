import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Registration() {
  const [name,setName] = useState("");
  const [dob, setDOB] = useState("");
  const [email,setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [role , setRole] = useState("");
  const [navigate , setNavigate] = useState(false);
  const navigator = useNavigate()
  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/register`,{
         name , password , email , dob , role
      })
      if(response.status === 200) setNavigate(true);
    } catch (err) {
      console.log(`Error in registration ${err.message}`);
    }
  }

  useEffect(()=>{
     if(navigate) navigator('/login');
  },[navigate])

  return (
    <div className='layout' >
    <div className='brand'></div>
    <p className='text' >We are Electric</p>
    <form  onSubmit={handleSubmit} >
       <input  className='name'  style={{marginBottom : "25px"}} value={name}  onChange={(e)=>setName(e.target.value)}  type="text" name="name" placeholder='Enter your Name' required />
       <input  className='dob'  style={{marginBottom : "25px"}} value={dob}  onChange={(e)=>setDOB(e.target.value)}  type="text" name="dob" placeholder='DOB:DD-MM-YYYY' required />
       <input  className='email'  style={{marginBottom : "25px"}} value={email}  onChange={(e)=>setEmail(e.target.value)}  type="email" name="email" placeholder='E-mail' required/>
       <input className='password' style={{marginBottom : "25px"}} value={password}  onChange={(e)=>setPassword(e.target.value)}  type="password" name="password" placeholder="Password" required />
       <input className='role' style={{marginBottom : "25px"}} value={role}  onChange={(e)=>setRole(e.target.value)}  type="text" name="role" placeholder="Enter your role" required/>
       <button type='submit'  className='register-btn'>Register</button>
    </form>
  </div>
  )
}
