import React from 'react'
import Img1 from '../../../public/assets/img1.png'
import Img2 from '../../../public/assets/img2.png'
import Img3 from '../../../public/assets/img3.png'

function About() {
    return (
        <div class="bg-[url('/assets/Background1.png')] bg-cover bg-center h-screen">
            <div class="flex justify-center space-x-4">
                <img src={Img1} alt="Gambar 1" class="w-1/12 h-72" />
                <img src={Img2} alt="Gambar 2" class="w-1/12 h-auto" />
                <img src={Img3} alt="Gambar 3" class="w-1/12 h-72" />
            </div>
            <div className='container mx-auto flex items-center justify-around'>
                <div className='w-1/3 h-36 text-right items-center justify-center'>
                    <h1 className='text-5xl'>About Us</h1>
                    <p className='text-lg'>GreenVision adalah aplikasi inovatif yang dirancang untuk membantu petani menjaga kesehatan tanaman dengan solusi praktis dan akses cepat ke informasi. Fitur utama termasuk panduan pertanian, katalog penyakit beras, dan solusi berdasarkan deteksi penyakit. Petani dapat mengunggah foto tanaman untuk diagnosis cepat, menerima rekomendasi perawatan, dan terhubung dengan penjual melalui pasar pertanian.</p>
                </div>
                <div className='w-1/3 h-36 text-left items-center justify-center'>
                    <h1 className='text-5xl'>Our History</h1>
                    <p className='text-lg'>GreenVision mulai memenuhi kebutuhan petani akan solusi cepat dan andal untuk masalah tanaman. Awalnya berfokus pada deteksi penyakit, telah tumbuh menjadi platform yang menawarkan diagnostik, pasar produk, dan forum kolaboratif. Kami terus berinovasi untuk memberdayakan petani dengan alat yang mereka butuhkan untuk tanaman yang lebih sehat.</p>
                </div>
            </div>
        </div>

    )
}

export default About
