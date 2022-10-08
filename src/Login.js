import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((auth) => {
      if (auth) {
        history('/');
      }
    })
    .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history('/');
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
        <Link to="/">
            <img className="companylogo" src="whitelogo.png"/>
        </Link>

        <div className='login-container'>
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button type="submit" onClick={signIn} className='SignIn-button'>Sign In</button>
                <p>By signing in you agree to the terms and conditions of use and sale of the company, Please see our Privacy Notice, Cookies Notice and Privacy bsed AD Notice</p>
                <button onClick={register} className='SignUp-button'>Create a new Account</button>
            </form>
        </div>
    </div>
  )
}

export default Login