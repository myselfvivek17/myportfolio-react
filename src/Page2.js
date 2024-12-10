import React from 'react'
import AboutMe from './AboutMe'
export default function Page2() {
  return (
    <div style={{ minHeight: "100svh",paddingLeft:"25px",paddingRight:"25px",fontFamily:"Inter"}} id='about'>
        <div style={{paddingTop:"80px"}}>
        <h1 style={{fontSize:"70px",textAlign:"center"}}>ABOUT ME</h1>
        <p style={{color:"lightgray",fontSize:"large"}}> Ambitious computer science student
 with a keen interest in Web
 Development, eager to gain practical
 experience and excel in the field.
 Friendly and driven, I am committed
 to learning and contributing to
 innovative projects in the dynamic
 world of technology.</p>
 <h1 style={{fontSize:"50px"}}>Roles I am Interested In</h1>
 <br></br>
          <AboutMe/>
        </div>
    </div>
  )
}
