/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

//import scss
import ".././assets/custom/scss/buttCreateProduct.scss";

const buttCreateProduct = (props) => {
  const [statusButtCreate, setStatusButtCreate] = useState(false);
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
