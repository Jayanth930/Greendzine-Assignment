import React from 'react'

export default function ProductivityTable() {
  return (
    <div className='productivity-layout'>
      <h3>Employee Productivity dashboard</h3>
      <div>
        <div style={{display : "flex" , alignItems : 'center'}}>
          <p className="font-mulish productivity-text" style={{color : "#FFFFFF"}} >Productivity on Monday</p>
          <span className='procutivity-percentage' style={{marginLeft: "40%" , color : "#36A546"}} >40%</span>
        </div>
        <div className="progress-bar"><div style={{width : "40%" , height : "100%" , backgroundColor : "#36A54680"}} ></div></div>
      </div>
      <div>
        <div style={{display : "flex" , alignItems : 'center'}}>
          <p className="font-mulish productivity-text" style={{color : "#FFFFFF"}} >Productivity on Tuesday</p>
          <span className='procutivity-percentage' style={{marginLeft: "40%" , color : "#36A546"}} >10%</span>
        </div>
        <div className="progress-bar"><div style={{width : "10%" , height : "100%" , backgroundColor : "#36A54680"}} ></div></div>
      </div>
      <div>
        <div style={{display : "flex" , alignItems : 'center'}}>
          <p className="font-mulish productivity-text" style={{color : "#FFFFFF"}} >Productivity on Wednesday</p>
          <span className='procutivity-percentage' style={{marginLeft: "40%" , color : "#36A546"}} >60%</span>
        </div>
        <div className="progress-bar"><div style={{width : "60%" , height : "100%" , backgroundColor : "#36A54680"}} ></div></div>
      </div>
    </div>
  )
}
