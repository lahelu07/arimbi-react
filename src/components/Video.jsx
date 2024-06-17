import React from "react";
import videoBg from "../img/2023.mp4";

function Video() {
  return (
    <div>
      <div className=" relative h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover -z-20 brightness-70 top-0"
          src={videoBg}
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center  justify-center -z-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Selamat Datang di Arimbi
          </h1>
          <button className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white text-lg rounded-lg">
            Ajukan Ususlan
          </button>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute -z-10 -bottom-1">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,160L34.3,154.7C68.6,149,137,139,206,122.7C274.3,107,343,85,411,101.3C480,117,549,171,617,197.3C685.7,224,754,224,823,208C891.4,192,960,160,1029,154.7C1097.1,149,1166,171,1234,181.3C1302.9,192,1371,192,1406,192L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg> */}
      </div>
    </div>
  );
}

export default Video;
