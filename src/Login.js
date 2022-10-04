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
            </form>
        </div>
    </div>
  )
}

export default Login