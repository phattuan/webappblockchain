/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useState } from "react";

import FormLogRegister from "../components/formLogRegister";
import AlertLog from "../components/alertLog";
import { useNavigate } from "react-router-dom";

import ".././assets/custom/scss/login.scss";
//                test        //
// import Web3 from "web3";
import Web3 from "web3";

//import web3 =================================
import Web3Connection from ".././web3/Web3";

// get accounts start

let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const getAccAdmin = async () => {
  const acc = await web3.eth.getAccounts((err, results) => {
    return results;
  });
  return acc;
};
//get accounts end

function login(props) {
  let connectWeb3 = new Web3Connection();
  // bien
  let navigate = useNavigate();

  // ==================== trans =======
  // connectWeb3.register();
  const [messLog, setMessLog] = useState("fail");

  const eventInfoPost = async function eventinfopost(username) {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    const check = await connectWeb3.userInfo(account);

    // check accout registed

    const checkRegisted = async function checkRegister() {
      if (check.registered) {
        console.log("da ton tai");
        navigate("/home");
      } else {
        connectWeb3.register(username, account);
        navigate("/home");
        // console.log(username);
      }
      //log check data req from smart contract
      // console.log(check);
    };
    checkRegisted();
    // console.log(accAdmin);
    // console.log(account);

    // check admin
    const functCheckAdmin = async function () {
      ;

      
      if (connectWeb3.isAdministrator(account)===true) {
        console.log('admin');
      }else{
        console.log('client');
      }

      // if(checkAdmin===)
    };
    functCheckAdmin();
  };
  // eventInfoPost()

  return (
    <div className="layout-login">
      <div className=" layout-form">
        <div className="contaiter-left">
          <p id="text-review" className="">
            Giao dịch chỉ số, hàng hóa và hơn thế nữa trên nền tảng độc quyền
            của chúng tôi. Luôn cập nhật mới nhất các tin tức và giá thị trường,
            cung cấp các công cụ quản lý rủi ro đa dạng và phong phú
          </p>
          <div className="butt-infapp">
            <span className="title-if">Thông tin thêm</span>
          </div>
        </div>
        <FormLogRegister geteventpostinfo={eventInfoPost} />
      </div>
      {/* getusername={getNameUser}  */}
      {/* alert log */}
      <AlertLog messLog={messLog} />

      {/* <BrowserRouter> */}

      {/* <Routes> */}

      {/* <Route path="/home" element={<Home/>} /> */}
      {/* </Routes> */}

      {/* </BrowserRouter> */}
      {/* <button onClick={testthu}>ok</button> */}
    </div>
  );
}

export default login;
