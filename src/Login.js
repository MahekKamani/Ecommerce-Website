import React from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom"

function Login() {
  return (
    <div className='login'>
        <Link to="/">
            <img className="companylogo" src="whitelogo.png"/>
        </Link>
        <div className='login-container'>
            <h1>Sign In</h1>
            <form>
                <h5>Email</h5>
                <input type="text"/>
                <h5>Password</h5>
                <input type="password"/>
                <button>Sign In</button>
                <p>By signing in you agree to the terms and conditions of use and sale of the company, Please see our Privacy Notice, Cookies Notice and Privacy bsed AD Notice</p>
                <button>Create a new Account</button>
            </form>
        </div>
    </div>
  )
}

export default Login