import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">logo</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="email" placeholder="password" />
          {/* innter style for file */}
          <input style={{ display: 'none' }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
