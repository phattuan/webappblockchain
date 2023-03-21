/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

//import scss
import ".././assets/custom/scss/product.scss";

//import img test
import imgtest from ".././assets/images/pexels-alex-andrews-821651.jpg";

const product = () => {
    //data test
  const [dataProduct, setDataProduct] = useState({});
  setTimeout(() => {
    setDataProduct({
        nameProduct:'binh co',
        imgProduct:imgtest
    });
  }, 3000);
    // select phien dau gia
  function selectPhienDauGia(){
    // di toi phien dau gia : 
    
  }

  return (
    <div className="product" onClick={selectPhienDauGia}>
      <img src={dataProduct.imgProduct} alt="" />
      <div className="detail-prod">
        <span style={{ color: "orangered", fontWeight: 500 }}>Product:</span>
        <span>{dataProduct.nameProduct}</span>
      </div>
    </div>
  );
};

export default product;
