/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";

//import scss
import ".././assets/custom/scss/buttCreateProduct.scss";

const buttCreateProduct = (props) => {
  const [statusButtCreate, setStatusButtCreate] = useState(false);
useEffect(() => {
  let hidden = document.querySelector('.butt-create-product')

  if(props.allowadmin){
    hidden.style.visibility = 'visible'
  }else{
    hidden.style.visibility = 'hidden'
  }
  
}, [])

  function createProduct() {
    if (!statusButtCreate) {
      props.getstatusbuttcreate(statusButtCreate);
    } else {
      setStatusButtCreate(false);
    }
  }
  return (
    <div className="butt-create-product" onClick={createProduct}>
      <i className="bx bx-plus-medical"></i>
    </div>
  );
};

export default buttCreateProduct;

