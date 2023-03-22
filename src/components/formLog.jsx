/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";

import Home from ".././pages/home";



const formLog = (props) => {
  const [infLog, setInfLog] = useState();
 
  const reqLog = "success";
  const getPustInfLog = () => {
    if (reqLog === "success") {
      props.getusername(infLog);
      //sử lý event sau khi click log
      // push data lên server xử lý => nếu thỏa thì sẽ điều hướng đến /home
      // console.log("htp");
    }
  };

  function getInf(e) {
    setInfLog({ ...infLog, [e.target.name]: e.target.value });
  }
  // console.log(urlHome);
  return (
    <>
      <form className="form-register-log">
        <label>
          <input
            type="text"
            id="email"
            className="input-f"
            placeholder="Name"
            name="name"
            onChange={getInf}
          />
        </label>
        <label>
          <input
            type="password"
            id="password"
            className="input-f"
            placeholder="Public key"
            name="publickey"
            onChange={getInf}
          />
        </label>
      </form>
      
      <button id="butt-register-log" onClick={getPustInfLog}>
        <div id="link-home">
          Log
        </div>
      </button>
    </>
  );
};

export default formLog;
