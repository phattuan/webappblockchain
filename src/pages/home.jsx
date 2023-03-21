/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
// import imgae

// import component
import ButtCreateProduct from ".././components/buttCreateProduct";
import CreateProduct from ".././components/createProduct";
import ListProduct from '.././components/listProduct'
import PhienDauGia from '.././components/phienDauGia'

//import scss
import ".././assets/custom/scss/home.scss";

const home = (props) => {
  const [createProduct, setCreateProduct] = useState();
  const [statusComponentCreate, setStatusComponentCreate] = useState();
  // abc();
  const getStatusCreate = (statusComponentCreate) => {
    console.log(statusComponentCreate);
  };
  //get status butt create
  const getStatusCompCreate = (statusComp) => {
    if (statusComp) {
      setCreateProduct();
    }
  };
  const getStatusButtCreate = (statusButt) => {
    if (!statusButt) {
      setCreateProduct(
        <CreateProduct getstatuscompcreate={getStatusCompCreate} />
      );
    }
  };

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
      <ButtCreateProduct getstatusbuttcreate={getStatusButtCreate} />

      {/*create product */}
      {createProduct}

      <ListProduct />
      {/**phien dau gia */}
      {/* <PhienDauGia /> */}
    </div>
  );
};

export default home;
