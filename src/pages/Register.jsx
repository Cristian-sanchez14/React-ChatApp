import React from 'react'
import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

const Register = () => {
  const { err, setErr } = false
  const handleSubmit = async (e) => {
    // prevents from refresching page
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].flies[0]

    // try error is there is an error creating a profile
    try {
      // User creates With Email And Password NOTE: inizialize Authentication on (firebase.com)
      // res = User
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName)

      const uploadTask = uploadBytesResumable(storageRef, file)

      // Register three observers
      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          setErr(true)
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photosUrl: downloadURL
            })
          })
        }
      )
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
          {err && <span>Somthing went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  )
}

export default Register
