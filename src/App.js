/* eslint-disable no-const-assign */
/* eslint-disable react/jsx-no-undef */
import './App.css';
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Login from './pages/login'
import InfoApp from './pages/infoApp'
import Home from './pages/home'
import { useEffect, useState } from 'react';
// import home from './pages/home';

import Nav from './components/nav'


function App() {
  const [userName, setUserName] = useState('')
  const getUserName = (user) => {
    return setUserName(user)
  }
  // console.log(userName);
  return (

    <div className="App">
      < Nav username={userName} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <Login functUserName={getUserName} />
            <InfoApp />
          </>} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
