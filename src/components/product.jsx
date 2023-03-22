/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

//import scss
import ".././assets/custom/scss/product.scss";

//import img test
import imgtest from ".././assets/images/pexels-alex-andrews-821651.jpg";

const product = (props) => {
  //data test
  // const [dataProduct, setDataProduct] = useState({});
  // setTimeout(() => {
  // useEffect(() => {
  //   setDataProduct({
  //     nameProduct: props[0].nameProduct,
  //     imgProduct: props[0].imgProduct,
  //   });
  // });
  // }, 3000);

  // console.log(props.detailProduct);
  // select phien dau gia
  function selectPhienDauGia() {
    // di toi phien dau gia :
  }

  return (
    <div className="product" onClick={selectPhienDauGia}>
      <img src={props.imgProduct} alt="" />
      <div className="detail-prod">
        <span style={{ color: "orangered", fontWeight: 500 }}>Product:</span>
        <span>{props.nameProduct}</span>
      </div>
    </div>
  );
};

export default product;
