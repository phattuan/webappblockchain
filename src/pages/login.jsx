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

let connectWeb3 = new Web3Connection();

function login(props) {
  // bien
  const [pathHome, setPathHome] = useState("");
  let navigate = useNavigate();

  // ==================== trans =======
  connectWeb3.register();
  const [messLog, setMessLog] = useState("fail");
  // check log end

  // ======== props getusername to formlogreister => formlog
  const getNameUser = (user) => {
    // setUserName(user)
    props.functUserName(user.name);
    props.functPublicKey(user.publickey);
    //======= web3 register/log start =====
    const connectTransaction = connectWeb3.register(user.name, user.publickey);
    //======= web3 register/log end =====
    
    // ====== check admin ======================
    getAccAdmin().then((data) => {
      if (user.publickey === data[0]) {
        // xu ly cac thuoc tinh admin start
        //chuyen huong trang /home
        navigate("/home");
        // send isadmin to app.js
        props.isadmin(true)
        
        props.getconnecttransaction(connectWeb3)
        // xu ly cac thuoc tinh admin end
        
        console.log("admin");
      } else {
        navigate("/home");
        console.log("client");
        props.getconnecttransaction(connectWeb3)
        props.isadmin(false)
      }
    });
    // if(checkAdmin) {
    //   console.log('admin');
    // }

    // }
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
        <FormLogRegister getusername={getNameUser} />
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
