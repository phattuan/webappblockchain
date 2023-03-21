/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useState } from "react";

import styled from "styled-components";

import FormLogRegister from "../components/formLogRegister";
import AlertLog from "../components/alertLog";

import ".././assets/custom/scss/login.scss";
//                test        //
// import Web3 from "web3";
import Web3 from "web3";

//import web3 =================================
import Web3Connection from ".././web3/Web3";

let accAdmin = null
let web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const getAccAdmin = async () => {
  const acc = await web3.eth.getAccounts((err, results) => {
    return results;
  });
  // let data = await acc.json();
  return acc
};


// console.log(acc0);
let connectWeb3 = new Web3Connection();

// Web3.eth.getAccounts((err, acc)=>{
//  console.log(acc[0]);
// })
function login(props) {
  // ==================== trans =======
  connectWeb3.register();
  const [messLog, setMessLog] = useState("fail");
  // check log end
  const [pathHome, setPathHome] = useState();

  // ======== props getusername to formlogreister => formlog
  const getNameUser = (user) => {
    // setUserName(user)
    props.functUserName(user);

    // ====== check admin ============================
    getAccAdmin().then((data) => {
      if(user.publickey === data[0]){
        console.log('admin');
      }else{
        console.log('client');
      }
    });
    // if(checkAdmin) {
    //   console.log('admin');
    // }
    //======= web3 register/log start =====
    connectWeb3.register(user.name, user.publickey);
    //======= web3 register/log end =====

    // }
    let infUser = user;
    return infUser;
  };

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
        <FormLogRegister getusername={getNameUser} urlhome={pathHome} />
      </div>

      {/* alert log */}
      <AlertLog messLog={messLog} />

      {/* <BrowserRouter> */}

      {/* <Routes> */}

      {/* <Route path="/home" element={<Home/>} /> */}
      {/* </Routes> */}

      {/* </BrowserRouter> */}
    </div>
  );
}

export default login;
