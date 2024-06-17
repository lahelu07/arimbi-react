import React from "react";
import gambarFile from "../img/file.png";
import gambarDocument from "../img/document.png";
import gambarMegaphone from "../img/megaphone.png";

function Jadwal() {
  return (
    <div className="pt-16 pb-40">
      <div className="container flex justify-center mx-auto">
        <div className=" text-center w-[900px] ">
          <div class="text-[36px] mb-[8px]">Jadwal</div>
          <div>
            <div class="container mx-auto p-4">
              <div class="container mx-auto flex justify-between gap-4">
                <div class="  p-4 border-2 border-black w-[250px] h-[200px] transition-transform hover:shadow-lg hover:scale-105">
                  <div> Paper Submission Deadline </div>
                  <img
                    src={gambarFile}
                    alt=""
                    srcset=""
                    className=" w-20 p-3 flex mx-auto"
                  />
                  <div className="text-[20px]"> 20 March 2024</div>
                </div>
                <div class="p-4 border-2 border-black w-[250px] h-[200px] transition-transform hover:shadow-lg hover:scale-105">
                  <div> Paper Notification Submited </div>
                  <img
                    src={gambarDocument}
                    alt=""
                    srcset=""
                    className=" w-20 p-3 flex mx-auto"
                  />
                  <div className="text-[20px]"> 21 April 2024</div>
                </div>
                <div class="p-4 border-2 border-black w-[250px] h-[200px] transition-transform hover:shadow-lg hover:scale-105">
                  <div> Tutorial Submission Deadline </div>
                  <img
                    src={gambarFile}
                    alt=""
                    srcset=""
                    className=" w-20 p-3 flex mx-auto"
                  />
                  <div className="text-[20px]"> 1 May 2024</div>
                </div>
                <div class="p-4 border-2 border-black w-[250px] h-[200px] transition-transform hover:shadow-lg hover:scale-105">
                  <div> Conference Journal Date </div>
                  <img
                    src={gambarMegaphone}
                    alt=""
                    srcset=""
                    className="w-20 p-3 flex mx-auto"
                  />
                  <div className="text-[20px]"> 30 June 2024</div>
                </div>
              </div>
              <div class="container mx-auto flex justify-between gap-4 p-5">
                <div class="  p-4 border-2 border-black w-[250px] h-[200px] transition-transform hover:shadow-lg hover:scale-105">
                  <div> Publish Submission Announcement</div>
                  <img
                    src={gambarFile}
                    alt=""
                    srcset=""
                    className=" w-20 p-3 flex mx-auto"
                  />
                  <div className="text-[20px]"> 1 August 2024</div>
                </div>
                <div class="p-4 border-2 border-black w-[250px] h-[200px] transition-transform hover:shadow-lg hover:scale-105">
                  <div> Submission Journal Conference </div>
                  <img
                    src={gambarDocument}
                    alt=""
                    srcset=""
                    className=" w-20 p-3 flex mx-auto"
                  />
                  <div className="text-[20px]"> 21 September 2024</div>
                </div>
                <div class="p-4 border-2 border-black w-[250px] h-[200px] transition-transform hover:shadow-lg hover:scale-105">
                  <div> Tutorial Submission Journal Deadline </div>
                  <img
                    src={gambarFile}
                    alt=""
                    srcset=""
                    className=" w-20 p-3 flex mx-auto"
                  />
                  <div className="text-[20px]"> 1 October 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jadwal;
