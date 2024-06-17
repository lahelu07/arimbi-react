import React from "react";
import gambar3 from "../img/gedung3.jpg";

function Berita() {
  return (
    <div>
      <section id="berita" class="py-36">
        <div class="container mx-auto grid grid-cols-2 p-20 space-x-7">
          <img
            src={gambar3}
            alt="ukdc"
            class=" object-cover w-full h-72 rounded-lg "
          />
          <div class="">
            <p class="font-bold text-[30px]">
              Membangun Masa Depan yang Berkelanjutan dengan Teknologi Hijau{" "}
            </p>
            <div class=" font-medium text-[25px] pb-4">
              Penelitian dan Abdimas
            </div>
            <div>
              Dalam era ketidakpastian perubahan iklim, teknologi hijau menjadi
              landasan penting dalam upaya kita untuk membangun masa depan yang
              berkelanjutan. Tema ini menyoroti peran teknologi dalam mengatasi
              tantangan lingkungan, mempercepat transisi ke energi terbarukan,
              dan menciptakan solusi inovatif untuk melestarikan planet kita.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Berita;
