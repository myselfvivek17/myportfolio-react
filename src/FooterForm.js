import React from 'react'
import './FooterForm.css'
export default function FooterForm() {
  return (
    <div className='footer-form'>
        <div className='inpdiv'>
            <span>Name</span>
            <input type="text" name="name" id="name" />
        </div>
        <div className='inpdiv'>
            <span>Email</span>
            <input type="email" name="email" id="email" />
        </div>
        <div className='inpdiv'>
            <span>Message</span>
            <textarea name="msg" id="" cols="30" rows="10"></textarea>
        </div>
        <button>Submit</button>
    </div>
  )
}
