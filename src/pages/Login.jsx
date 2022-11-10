import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">logo</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="email" placeholder="password" />

          <button>Sign in</button>
        </form>
        <p>You do have an account? Register</p>
      </div>
    </div>
  )
}

export default Login
