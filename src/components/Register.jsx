import React from 'react'

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
          <input type="file" />
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
