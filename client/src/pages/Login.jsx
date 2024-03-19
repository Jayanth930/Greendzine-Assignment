import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message , setMessage] = useState(null)
  const navigate = useNavigate()
  async function handleSubmit(e){
     e.preventDefault();
    console.log(process.env.REACT_APP_SERVER_URL);
     const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/login`,{
       email , password
     }) 
     setMessage(response.data.message)
  }
  useEffect(()=>{
    if(message && message.includes('Successfull')) navigate("/home/productivity")
  },[message])
  return (
    <div className='layout' >
      <div className='brand'></div>
      <p className='incorrect-credentials'  style={{color : message && message.includes('Incorrect') ? "red" : "green"}} >{message && message}</p>
      <p className='text' >We are Electric</p>
      <form onSubmit={handleSubmit}  >
        <input  className='email'  style={{marginBottom : "25px"}} type="email" name="email" placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input className='password' style={{marginBottom : "25px"}} type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit' className='login-btn'  >Login</button>
      </form>
      <p className='register'  >Not Registered Yet?<Link to="/register"  style={{color : "#23629F" , fontSize : '1.2rem'}} >SignUp</Link></p>
      <Link className='forget-password-link' to="#" >Forgot password</Link>
    </div>
  )
}
