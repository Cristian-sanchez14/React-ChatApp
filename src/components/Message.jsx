import React from 'react'

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/13664663/pexels-photo-13664663.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="img"
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
          src="https://images.pexels.com/photos/13664663/pexels-photo-13664663.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
      </div>
    </div>
  )
}

export default Message
