/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
// import imgae

// import component
import ButtCreateProduct from ".././components/buttCreateProduct";
import CreateProduct from ".././components/createProduct";
import ListProduct from ".././components/listProduct";
import PhienDauGia from ".././components/phienDauGia";

//import scss
import ".././assets/custom/scss/home.scss";

//imoprt img test
import imgProduct1 from ".././assets/images/pexels-alex-andrews-821651.jpg";

const home = (props) => {
  // variable status
  const [createProduct, setCreateProduct] = useState();
  const [statusListProduct, setStatusListProduct] = useState(7);
  const [listProduct, setListProduct] = useState();

  //

  //get status butt create
  const getStatusCompCreate = (statusComp) => {
    if (statusComp) {
      setCreateProduct();
    }
  };

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
  // console.log(props.address);

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
      {/**phien dau gia */}
      {/* <PhienDauGia /> */}
    </div>
  );
};

export default home;
