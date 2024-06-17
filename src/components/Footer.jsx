import React from "react";
import whatsapp from "../img/whatsapp.png";
import instagram from "../img/instagram.png";
import twitter from "../img/twitter.png";
import youtube from "../img/youtube.png";
import gabungan from "../img/gabungan.png";

function Footer() {
  return (
    <div>
      <footer class="bg-purple-950 text-white  mt-28">
        <div class="container w-full mx-auto grid grid-cols-3 p-20 gap-52">
          <img
            src={gabungan}
            alt=""
            srcset=""
            className="object-cover w-full h-full"
          />
          <div>
            <div class="font-bold">Alamat</div>
            <div class="pb-4">
              Jl. Dr. Ir. H. Soekarno No.201, Klampis Ngasem, Kec. Sukolilo,
              Kota SBY, Jawa Timur 60117
            </div>
            <div class="">Telp : (031) 5914157, 5946482</div>
            <div>Fax : (031) 5939625</div>
          </div>
          <div>
            <div class="font-bold pb-4">Informasi Lebih lanjut</div>
            <div className="flex mt-5 ">
              <img
                src={whatsapp}
                alt="whatsapp"
                srcset=""
                className="h-10 w-10 "
              />
              <div className=" pl-5 pt-2">0813-5856-5544</div>
            </div>
            <div className="flex  mt-5">
              <img
                src={instagram}
                alt="instagram"
                srcset=""
                className="h-10 w-10"
              />
              <div className=" pl-5 pt-2 "> infoukdc </div>
            </div>
            <div className="flex justify-between  mt-5">
              <img src={youtube} alt="twitter" className="h-10 w-10" />
              <div className=" pl-5 pt-2"> UniveristasKatolikDarmaCendika</div>
            </div>
          </div>
        </div>
        <div class="container mx-auto px-6">
          <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
              <p class="text-sm font-bold mb-2">
                © 2024 by Universitas Katolik Darma Cendika
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
