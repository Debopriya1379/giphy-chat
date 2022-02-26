import React from 'react'
import './GifMsg.css';

export const GifMsg = ({msg}) => {
  return (
    <div className='GifMsg'>
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
            {msg.msgtext && <div className="Message_text">
                <p>{msg.msgtext}</p>
            </div>}
            {msg.msgurl && <div className="Message_gif">
                <img src={msg.msgurl} alt="" />
            </div>}
        </div>
    </div>
  )
}
