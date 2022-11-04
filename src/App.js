import React, { useEffect } from 'react'
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout'
import Login from './Login.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './Payment.js'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51M0TIDSJG8WDOARuIQx9RCjaiVMw62yXI0AVvVX6QYW1GBWyXW9cFKDRBaxyLNDLMZZgLYOgw8a2ZXx59MvhQHql00Jgc8cnXb");

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is -> ', authUser);
      
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser 
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<><Login/></>}/>
          <Route path="/" element={<> <Header /> <Home /> </>}/>
          <Route path="/checkout" element={<> <Header /> <Checkout/></>}/>
          <Route path="/payment" element={<> <Header /> <Elements stripe={promise}><Payment/></Elements></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;