/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";

// import scss
import ".././assets/custom/scss/listproduct.scss";

import Product from ".././components/product";

const listProduct = (props) => {
  const [listProduct, setListProduct] = useState(props.datalistproduct);
  // console.log(listProduct);
  return (
    <div className="layout-list-product">
      {listProduct.map((product, index) => {
        return (
          <Product
            key={index}
            nameProduct={product.nameProduct}
            imgProduct={product.imgProduct}
          />
        );
      })}
    </div>
  );
};

export default listProduct;
