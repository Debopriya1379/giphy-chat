import React from 'react'
import './SingleMsg.css'

export const SingleMsg = ({msgText}) => {
  return (
    <div className='SingleMsg'>
        <div className="Message_Header">
            <div className="profile_photo">
                <div id='pic'>P</div>
            </div>
            <div className="profile_info">
                <p>D2gmail.com</p>
                <p>57 min ago</p>
            </div>
        </div>
        <div className="Message_body">
            <p>{msgText.text}</p>
        </div>
    </div>
  )
}
