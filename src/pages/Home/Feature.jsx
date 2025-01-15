import Mockup from "/assets/mockupGV.png";

function Feature() {
  return (
    <div id="feature" className="bg-[url('/assets/Background2.png')] bg-cover bg-center min-h-screen">
      <div className="container mx-auto py-16">
        <div className="text-center mb-24">
          <h2 className="text-white text-4xl font-bold">Features</h2>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-1/2 flex justify-center">
            <img
              src={Mockup}
              alt="Apps GreenVision"
              className="w-[400px] transform -rotate-6"
            />
          </div>

          {/* misal */}
          <div className="w-1/2 space-y-5 pr-16 ">
            <div className="relative bg-gradient-to-r from-white/40 via-white/0 to-white/40 rounded-xl p-[3px] w-[619px] ml-10">
              <div className="bg-[#3D5649] bg-opacity-80 h-auto pt-4 pb-6 px-24 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-white mb-4 text-center">
                  Deteksi Penyakit Tanaman
                </h3>
                <p className="text-white text-sm text-center">
                  Dengan bantuan teknologi terkini, GreenVision memungkinkan
                  pengguna mendeteksi penyakit pada tanaman dengan cepat dan
                  akurat. Cukup unggah foto tanaman Anda, dan aplikasi kami akan
                  memberikan diagnosis serta saran perawatan.
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-white/40 via-white/0 to-white/40 rounded-xl p-[3px] w-[718px]">
              <div className="bg-[#3D5649] bg-opacity-80 h-auto pt-8 pb-6 px-52 rounded-xl shadow-lg ">
                <h3 className="text-lg font-semibold text-white mb-4 text-center">
                  Saran Obat dan Perawatan
                </h3>
                <p className="text-white text-sm text-center">
                  GreenVision menyediakan rekomendasi produk perawatan dan obat
                  yang tepat berdasarkan hasil identifikasi penyakit. Setiap
                  saran dilengkapi dengan panduan penggunaan yang mudah
                  dipahami.
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-white/40 via-white/0 to-white/40 rounded-xl p-[3px] w-[619px] ml-10">
              <div className="bg-[#3D5649] bg-opacity-80 h-auto pt-4 pb-6 px-24 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-white mb-4 text-center">
                  Komunitas Petani
                </h3>
                <p className="text-white text-sm text-center">
                  Bergabunglah dengan komunitas petani untuk berbagi pengalaman,
                  mendapatkan solusi atas permasalahan, dan membangun jaringan
                  dengan para ahli dan sesama pengguna.
                  memberikan diagnosis serta saran perawatan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
