import React, { useEffect } from 'react'
import Header from './Header.js'
import Home from './Home.js'
import Checkout from './Checkout'
import Login from './Login.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { auth } from './firebase'
import { useStateValue } from './StateProvider'
import Payment from './Payment.js'

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
          <Route path="/payment" element={<> <Header /> <Payment/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;