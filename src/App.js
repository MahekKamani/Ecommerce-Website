import React from 'react';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout';
import Login from './Login.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<><Login/></>}/>
          <Route path="/" element={<> <Header /> <Home /> </>}/>
          <Route path="/checkout" element={<> <Header /> <Checkout/></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;