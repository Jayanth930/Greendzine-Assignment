import React from 'react'
import {Routes , Route, NavLink } from 'react-router-dom'
import ProductivityTable from "./ProductivityTable"
import Employeelist from "./Employeelist"
export default function Layout() {
  return (
   <div className='layout'>
    <div className='helpdesk'></div>
    <div className='motopro-logo'></div>
      
      <Routes>
          <Route path='/productivity' element={<ProductivityTable />} />
          <Route path='/list' element={<Employeelist />}/>
      </Routes>

    <div style={{display : "flex"}} >
        <NavLink  to="/home/productivity" className={({isActive})=> isActive ? "layout-btn home active":"layout-btn home"}>
         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48" fill='#36A546' >
            <path d="M43.428,13.096l-19-9c-0.271-0.128-0.585-0.128-0.856,0l-19,9C4.223,13.262,4,13.614,4,14v4c0,0.265,0.105,0.52,0.293,0.707	L5,19.414V39c0,1.654,1.346,3,3,3h32c1.654,0,3-1.346,3-3V19.414l0.707-0.707C43.895,18.52,44,18.265,44,18v-4	C44,13.614,43.777,13.262,43.428,13.096z"></path><path fill="#fff" d="M40,39H8c-1.105,0-2-0.895-2-2V17l-1-1v-4l19-9l19,9v4l-1,1v20C42,38.105,41.105,39,40,39z"></path><path d="M40,40H8c-1.654,0-3-1.346-3-3V17.414l-0.707-0.707C4.105,16.52,4,16.265,4,16v-4c0-0.386,0.223-0.738,0.572-0.904l19-9	c0.271-0.128,0.585-0.128,0.856,0l19,9C43.777,11.262,44,11.614,44,12v4c0,0.265-0.105,0.52-0.293,0.707L43,17.414V37	C43,38.654,41.654,40,40,40z M6,15.586l0.707,0.707C6.895,16.48,7,16.735,7,17v20c0,0.551,0.449,1,1,1h32c0.551,0,1-0.449,1-1V17	c0-0.265,0.105-0.52,0.293-0.707L42,15.586v-2.953L24,4.106L6,12.633V15.586z"></path><path d="M24.428,7.096c-0.271-0.128-0.585-0.128-0.856,0l-18,8.526l0.856,1.808L24,9.106l17.572,8.324l0.856-1.808L24.428,7.096z"></path><path d="M28,21h-8c-1.654,0-3,1.346-3,3v15h2V24c0-0.551,0.449-1,1-1h8c0.551,0,1,0.449,1,1v15h2V24C31,22.346,29.654,21,28,21z"></path>
          </svg>
        </NavLink>
        <NavLink  to="/home/list"  className={({isActive})=> isActive?"layout-btn user active" : "layout-btn user"}>
          <svg className="feather feather-user" fill="#36A546"  width="48" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </NavLink>
    </div>
   </div>
  )
}
