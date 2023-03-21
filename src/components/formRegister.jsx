/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import ".././assets/custom/scss/formLogReg.scss";

const formRegister = () => {
  return (
    <>
      <form className="form-register-log">
        <span className="row-inf-register">
          Bước 1: Cài đặt Ethereum và gia nhập network ID: 686868 (lộc phát lộc
          phát lộc phát)
        </span>
        <span className="row-inf-register">Bước 2: Kết nối với MetaMask </span>
        <span className="row-inf-register">
          Bước 3: Dùng Public key kết nối với web Lưu ý: Nếu muốn tạo sản phẩm
          cài đặt Go-ipfs{" "}
        </span>
      </form>
    </>
  );
};

export default formRegister;
