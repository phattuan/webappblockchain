/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Web3 from "web3";

// import scss
import ".././assets/custom/scss/createproduct.scss";

// import img
import imgUpload from ".././assets/images/upload.gif";

const createProduct = (props) => {
  const [statusComponentCreat, setStatusComponentCreat] = useState(true);

  const [uploadImg, setUploadImg] = useState(imgUpload);
  //data get from create product
  const [detailProduct, setDetailProduct] = useState();
  // data
  const [hashProd, setHashProd] = useState("");

  // let hiddenInputImg = document.querySelector('.layout-create-product .container-create-product .container-left .border-img input[type="file"]');

  function handleUploadImg(e) {
    setUploadImg(URL.createObjectURL(e.target.files[0]));

    // hiddenInputImg.style.visibility = 'hidden';
  }

  function getDetailProduct(e) {
    setDetailProduct({
      ...detailProduct,
      [e.target.name]: e.target.value,
      hash_img: { uploadImg },
    });
  }

  function handlePostProduct() {
    // console.log(detailProduct);
    setStatusComponentCreat(false);
    props.getstatuscompcreate(statusComponentCreat);
    // console.log(props.publickey);
    props.connecttransaction.createProduct(
      setDetailProduct.name,
      hashProd,
      props.publickey
    );
    props.gethashproduct(hashProd);
    console.log(hashProd);
  }
  function handleClose() {
    setStatusComponentCreat(false);
    props.getstatuscompcreate(statusComponentCreat);
  }

  function uploadIpfs(e) {
    setUploadImg("https://ipfs.io/ipfs/" + e.target.value);
    setHashProd(Web3.utils.sha3(e.target.value));
  }

  return (
    <div className="layout-create-product">
      <div className="container-create-product">
        <div className="container-left">
          <div className="border-img">
            {/* <input
              className="input-img"
              id="input-img"
              type="file"
              accept=".png, .jpg"
              onChange={handleUploadImg}
            /> */}
            <img id="review-img" src={uploadImg} alt="" />
          </div>
        </div>
        <div className="container-right">
          <form className="form-create-product">
            <input
              type="text"
              placeholder="Name Product"
              name="name_product"
              onChange={getDetailProduct}
            />
            <input
              type="text"
              placeholder="Hash image"
              // value={uploadImg}
              name="hash_img"
              onChange={uploadIpfs}
              // disabled
            />
            <input
              type="text"
              placeholder="Time"
              name="time_out"
              onChange={getDetailProduct}
            />
          </form>
          <div className="butt-done" onClick={handlePostProduct}>
            <span>Done</span>
          </div>
        </div>
        <i className="bx bx-x icon-close" onClick={handleClose}></i>
      </div>
    </div>
  );
};

export default createProduct;
