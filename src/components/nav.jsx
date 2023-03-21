/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

// import conponent
import TabInfUser from ".././components/tabInfUse";

import ".././assets/custom/scss/logo.scss";

import logo from ".././assets/images/images.png";

const nav =  (props) => {
  const [userName, setUserName] = useState();
// const getuser = async ()=>{
//  const user = new Promise((resolve, reject) => {
//     resolve(props.username)
//   })
//   setUserName(await user);
//   // useEffect(()=>{
//   // })
// }
// getuser()

  useEffect(()=>{
    setUserName(props.username);
  })
  // console.log(userName);

  const [tabInfo, setTabInfo] = useState();
  const [statusTabInf, setStatusTabInfo] = useState(false);
  function showInf() {
    if (statusTabInf) {
      setTabInfo();
      setStatusTabInfo(false);
    } else {
      setTabInfo(<TabInfUser username={userName} />);

      setStatusTabInfo(true);
    }
  }


  return (
    <div className="header">
      <div className="container-left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h1 className="title">FunixPricingChain</h1>
      </div>
      <div className="icon-inf-account" onClick={showInf}>
        <i className="bx bx-user"></i>
      </div>
      {tabInfo}
      {/* <TabInfUser /> */}
    </div>
  );
};
export default nav;
React.memo(nav);
