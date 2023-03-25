/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// import imgae

// import component
import ButtCreateProduct from ".././components/buttCreateProduct";
import CreateProduct from ".././components/createProduct";
import ListProduct from ".././components/listProduct";

//import scss
import ".././assets/custom/scss/home.scss";

const home = (props) => {
  //  ========= variable status start========
  const [createProduct, setCreateProduct] = useState();
  const [statusListProduct, setStatusListProduct] = useState(7);
  const [listProduct, setListProduct] = useState();
  //  ========= variable status end========

  // ========== var def start =====================
  let navigate = useNavigate();
  // ========== var def end =====================

  // ========= event reload page start================
  useEffect(() => {
    window.addEventListener("load", function eventLoad(event) {
      navigate("/");
    });
  }, []);
  // ========= event reload page end================

  // ========= get status getStatusCompCreate start ==========
  const getStatusCompCreate = (statusComp) => {
    if (statusComp) {
      setCreateProduct();
    }
  };
  // ========= get status getStatusCompCreate end ==========

  // ========= get status getStatusButtCreate start ==========
  const getStatusButtCreate = (statusButt) => {
    if (!statusButt) {
      setCreateProduct(
        <CreateProduct
          getstatuscompcreate={getStatusCompCreate}
          connecttransaction={props.connecttransaction}
          address={props.address}

          // gethashproduct={getHasProduct}
        />
      );
    }
  };
  // ========= get status getStatusButtCreate end ==========

  // ======= show/hidden . when list product = 0 start =======
  useEffect(() => {
    let emtyList = document.querySelector(".layout-home .layout-home-emty");
    if (statusListProduct === 0) {
      emtyList.style.visibility = "visible";
    } else {
      emtyList.style.visibility = "hidden";
      setListProduct(
        <ListProduct
          connecttransaction={props.connecttransaction}
          address={props.address}
        />
      );
    }
  }, []);
  // ======= show/hidden . when list product = 0 end =======

  return (
    <div className="layout-home">
      {/* nav  */}
      {/* layout-home emty */}
      <div className="layout-home-emty">
        <span className="note-emty">
          Hiên tại chưa có phiên đấu giá được mở !
        </span>
      </div>
      {/** button create prod */}
      <ButtCreateProduct
        getstatusbuttcreate={getStatusButtCreate}
        connecttransaction={props.connecttransaction}
        address={props.address}
      />
      {/*create product */}
      {createProduct}
      {listProduct}
    </div>
  );
};

export default home;
