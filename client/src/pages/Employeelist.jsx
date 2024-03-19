import React, { useRef, useState } from 'react'
import axios from 'axios'
export default function Employeelist() {
  const inputRef = useRef()
  const [list , setList] = useState([])
  async function handleClick(e){
    const name = inputRef.current.value;
    if(name !== ""){
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/employees/${name}`)
      setList(response.data)
    }
    
  } 
  return (
    <div className='list' >
     <div>
     <input  ref={inputRef}  type="text" placeholder="Serach with name"/>
      <button  className='list-btn' onClick={handleClick}>Search</button>
     </div>
      <div className='card'>
        {
          list  && list.map((employee,index)=>{
            return (
             <div  style={{display:'flex'}} >
             <table key={index}  >
                    <tr><td>EmpId</td> <td>:</td><td  style={{color : "white"}}>{index+1}</td></tr>
                    <tr><td>Name</td><td>:</td><td style={{color : 'white'}}>{employee.name}</td></tr>
                    <tr><td>DOB</td><td>:</td><td style={{color : 'orange'}} >{employee.dob}</td></tr>
                    <tr><td>Role</td><td>:</td><td style={{color : "green"}} >{employee.role}</td></tr>
              </table>
              <span className='employee-count'>{index+1}</span>
             </div>
            )
          })
        }
      </div>
    </div>
  )
}
