import React from "react";
import mbkm from "../img/mbkm.png";
import ristekDikti from "../img/ristekdikti.png";
import logo from "../img/logo.png";

function Logo() {
  return (
    <div className="py-20">
      <div className=" py-16 container flex justify-center mx-auto">
        <div className="text-[36px]">Powered by</div>
      </div>
      <div className="container flex justify-between mx-auto px-28">
        <div className=" pt-5 w-40">
          <img src={mbkm} alt="mbkm" srcset="" />
        </div>
        <div className=" w-40">
          <img src={ristekDikti} alt="ristekdikti" />
        </div>
        <div className=" w-28">
          <img src={logo} alt="ukdc" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default Logo;
