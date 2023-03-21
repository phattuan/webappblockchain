/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

//import scss
import ".././assets/custom/scss/phiendaugia.scss";

import imgPhienDinhGia from ".././assets/images/pexels-alex-andrews-821651.jpg";
const phienDauGia = () => {
  const [inputClientDinhGia, setInputClientDinhGia] = useState(<></>);
  const admin = false;

  // var <> close and post
    const buttClose = <div className="butt-close-phien">Close</div>
    const buttDone = <div className="butt-done-client">Done</div>


  if (admin) {
    useEffect(() => {
      setInputClientDinhGia(
        <input
          type="number"
          className="client-input-dinh-gia"
          placeholder="Nhap gia tri"
        />
      );
    },[]);
  }

  return (
    <div className="layout-phien-dau-gia">
      <div className="contaier-phien-dau-gia">
        <div className="container-left thong-tin-dinh-gia">
          <span className="title-container-left">Thông tin định giá</span>
          <div className="border-bottom"></div>
          <div className="container-chill-thong-tin-phien-dinh-gia">
            <div className="container-chill-left-img">
              <img src={imgPhienDinhGia} alt="" />
            </div>
            <div className="container-chill-right-detail">
              <div className="time-count">
                <span
                  className="text-w-dm"
                  style={{ color: "orange", fontWeight: "600" }}
                >
                  Time
                </span>
                <span className="text-w-dm">4:10</span>
              </div>
              <div className="detail-phien">
                <div className="detail-phien-row">
                  <span className="text-w-dm" style={{ marginRight: "2rem" }}>
                    Tên sản phẩm:{" "}
                  </span>
                  <span className="text-w-dm">Bình cổ</span>
                </div>
                <div className="detail-phien-row">
                  <span className="text-w-dm" style={{ marginRight: "2rem" }}>
                    Hashimg:{" "}
                  </span>
                  <span className="text-w-dm">http://abc.com</span>
                </div>
                <div className="detail-phien-row">
                  <span className="text-w-dm" style={{ marginRight: "2rem" }}>
                    Xuất xứ:{" "}
                  </span>
                  <span className="text-w-dm">Bình dương</span>
                </div>
                {inputClientDinhGia}
                {/* <input type="number" className="client-input-dinh-gia" placeholder="Nhap gia tri"/> */}
              </div>
            </div>
          </div>
          {/* <div className="butt-close-phien">Close</div> */}
          {buttClose}
        </div>
        <div className="container-right dinh-gia thong-tin-dinh-gia">
          <span className="title-container-left">Định giá</span>
          <div className="border-bottom"></div>
          <div className="container-dinh-gia-client">
            <div className="client-dinh-gia">
              {/** thay the MAP render client dinh gia */}
              <span className="name-client">User A:</span>
              <span className="gia-tri-client">8000$</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default phienDauGia;
