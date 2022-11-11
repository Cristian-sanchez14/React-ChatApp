import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Cristian chat</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/9135989/pexels-photo-9135989.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt="logo"
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
