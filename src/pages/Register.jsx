import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
  const handleSubmit = (e) => {
    //not prevents from refresching page
    e.preventDefault()
    console.log(e.target[2].value)
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">logo</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
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
