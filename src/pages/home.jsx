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
  const [hashProduct, setHashProduct] = useState();
  const [statusListProduct, setStatusListProduct] = useState(7);
  const [listProduct, setListProduct] = useState();
  //data list product . get from smartcontract
  const [dataListProduct, setDataListProduct] = useState([
    {
      nameProduct: "binh co",
      imgProduct:
        "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      nameProduct: "loa",
      imgProduct:
        "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      nameProduct: "xe",
      imgProduct:
        "https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]);

  //get status butt create
  const getStatusCompCreate = (statusComp) => {
    if (statusComp) {
      setCreateProduct();
    }
  };
  //get hash product
  const getHasProduct = (hash) => {
    setHashProduct(hash);
    console.log(hash);

    const productInfor = async () => {
      const product = await props.connecttransaction.productInfo(hash);
      console.log(product);
    };
    productInfor();
    
  };

  const getStatusButtCreate = (statusButt) => {
    if (!statusButt) {
      setCreateProduct(
        <CreateProduct
          getstatuscompcreate={getStatusCompCreate}
          connecttransaction={props.connecttransaction}
          publickey={props.publickey}
          gethashproduct={getHasProduct}
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
      setListProduct(<ListProduct datalistproduct={dataListProduct} />);
    }
  }, []);
  // console.log(listProductShow);

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
        allowadmin={props.isadmin}
      />

      {/*create product */}
      {createProduct}

      {listProduct}
      {/* <ListProduct /> */}
      {/**phien dau gia */}
      {/* <PhienDauGia /> */}
    </div>
  );
};

export default home;
