import React from "react";
import gambar2 from "../img/gedung2.jpg";

function Tabel() {
  return (
    <div className="">
      <section class="relative h-[700px] overflow-hidden py-40">
        <div class="flex -z-20 absolute brightness-50 top-0">
          <img src={gambar2} alt="" />
        </div>

        <div className="">
          <div className="pb-10 text-white text-[40px] container mx-auto pl-48">
            Pengumuman
          </div>

          <div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg my-4 w-[1000px] h-[250px] ">
            <div class="flex justify-between items-center py-4 px-6">
              <input
                type="text"
                placeholder="Cari judul penelitian..."
                class="w-full bg-gray-200 text-gray-800 border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:bg-white focus:border-purple-600"
              />
              <button class="ml-2 bg-purple-600 hover:bg-purple-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
                Cari
              </button>
            </div>

            <table class="min-w-full bg-white p-10">
              <thead>
                <tr class="w-full bg-gray-50 border-b">
                  <th class="border-r py-2 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Judul Penelitian
                  </th>
                  <th class="py-2 px-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b">
                  <td class="border-r py-2 px-4 text-sm text-gray-900">
                    Pengaruh Media Sosial terhadap Kesehatan Mental
                  </td>
                  <td class="py-2 px-4 text-sm text-green-600">Disetujui</td>
                </tr>
                <tr class="border-b">
                  <td class="border-r py-2 px-4 text-sm text-gray-900">
                    Dampak Perubahan Iklim terhadap Ekosistem Laut
                  </td>
                  <td class="py-2 px-4 text-sm text-green-600">Disetujui</td>
                </tr>
                <tr class="border-b">
                  <td class="border-r py-2 px-4 text-sm text-gray-900">
                    Inovasi Teknologi dalam Pendidikan Anak Usia Dini
                  </td>
                  <td class="py-2 px-4 text-sm text-red-600">Ditolak</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tabel;
