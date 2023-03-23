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
  const [userName, setUserName] = useState('');
  const [isAccAdmin, setIsAccAdmin] = useState();
  const [connectTransaction, setConnectTransaction] = useState();
  const [publicKey, setPublickey] = useState('')
  const getUserName = (user) => {
    return setUserName(user)
  }
  const getPublickey = (key) => {
    return setPublickey(key)
  }
  // console.log(userName);
  const isAdmin = (isadmin) => {

    return setIsAccAdmin(isadmin);
  }

  const getConnectTransaction = (connect) => {
    // console.log(connect);
    return setConnectTransaction(connect);
  }
  return (

    <div className="App">
      < Nav username={userName} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <Login functPublicKey={getPublickey} functUserName={getUserName} isadmin={isAdmin} getconnecttransaction={getConnectTransaction} />
            <InfoApp />
          </>} />
          <Route path="/home" element={<Home isadmin={isAccAdmin} connecttransaction={connectTransaction}  publickey={publicKey}/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
