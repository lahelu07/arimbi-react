import React from "react";
import gambar3 from "../img/gedung3.jpg";
import gambar2 from "../img/gedung2.jpg";

function About() {
  return (
    <section class=" py-44" id="tentang">
      <div className="container mx-auto grid grid-cols-2 p-20 space-x-7">
        <div class="pr-20">
          <p class="font-bold text-[30px]">ARIMBI</p>
          <div class=" font-medium text-[25px] pb-4">
            Aplikasi Research dan Pengabdian Masyarakat
          </div>
          <div>
            Aplikasi Arimbi merupakan aplikasi yang dirancang khusus untuk
            mendukung kegiatan mahasiswa dan dosen dalam meelakukan penelitian
            dan pengabdian dalam masyarakat. Platform ini menfasilitasi antara
            akademisi, peneliti serta masyarakat melalui berbagai proyek
            penelitian.
          </div>
        </div>
        <img
          src={gambar3}
          alt=""
          srcset=""
          class=" object-cover w-full h-72 rounded-lg "
        />
      </div>
    </section>
  );
}

export default About;
