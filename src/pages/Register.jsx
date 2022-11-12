import React from 'react'
import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Register = () => {
  const { err, setErr } = useState(false)
  const handleSubmit = async (e) => {
    // prevents from refresching page
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].flies[0]

    // try error is there is an error creating a profile
    try {
      // create User With Email And Password NOTE: inizialize Authentication on (firebase.com)
      const res = await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      setErr(true)
    }
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
