import React from 'react'
import { motion } from 'framer-motion'
import { FadeUp } from '../../untility/animation'
import Img1 from '/assets/img1.png'
import Img2 from '/assets/img2.png'
import Img3 from '/assets/img3.png'
import ImgP1 from '/assets/p-img1.png'
import ImgP2 from '/assets/p-img2.png'
import ImgP3 from '/assets/p-img3.png'

function About() {
    return (
        <div class="bg-[url('/assets/Background1.png')] bg-cover bg-center h-screen">
            <div class="absolute flex right-0 left-0 justify-center space-x-20 z-10">
                <img src={Img1} alt="Gambar 1" class="w-[150px] h-[250px]" />
                <img src={Img2} alt="Gambar 2" class="w-[150px] h-full" />
                <img src={Img3} alt="Gambar 3" class="w-[150px] h-[250px]" />
            </div>
            <div className='relative flex justify-center space-x-4 z-20'>
                <motion.img
                    src={ImgP1} alt="Gambar 1"
                    initial={{ opacity: 0, x: -200, y: -200, rotate: -30 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotate: 0,
                    }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.3, }}
                    class="absolute left-[550px] top-12" />
                <motion.img
                    src={ImgP2} alt="Gambar 2"
                    initial={{ opacity: 0, x: -200, y: -200, rotate: -30 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotate: 0,
                    }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.3, }}
                    class="absolute top-64 left-[780px]" />
                <motion.img
                    src={ImgP3} alt="Gambar 3"
                    initial={{ opacity: 0, x: -200, y: -200, rotate: -30 }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotate: 0,
                    }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.3, }}
                    class="absolute right-[613px] top-12" />

            </div>
            <div className='mt-80 container mx-auto flex items-center justify-around'>
                <div className='w-1/3 h-36 text-right items-center justify-center'>
                    <motion.h1 variants={FadeUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }} className='text-7xl font-Cormorant text-aksen_text mb-10 font-semibold'>About Us</motion.h1>
                    <motion.p variants={FadeUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }} className='text-lg font-opensans'>GreenVision adalah aplikasi inovatif yang dirancang untuk membantu petani menjaga kesehatan tanaman dengan solusi praktis dan akses cepat ke informasi. Fitur utama termasuk panduan pertanian, katalog penyakit beras, dan solusi berdasarkan deteksi penyakit. Petani dapat mengunggah foto tanaman untuk diagnosis cepat, menerima rekomendasi perawatan, dan terhubung dengan penjual melalui pasar pertanian.</motion.p>
                </div>
                <div className='w-1/3 h-36 text-left items-center justify-center'>
                    <motion.h1
                        variants={FadeUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }} className='text-7xl font-Cormorant text-aksen_text mb-10 font-semibold'>Our History</motion.h1>
                    <motion.p
                        variants={FadeUp(0.6)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }} className='text-lg font-opensans'>GreenVision mulai memenuhi kebutuhan petani akan solusi cepat dan andal untuk masalah tanaman. Awalnya berfokus pada deteksi penyakit, telah tumbuh menjadi platform yang menawarkan diagnostik, pasar produk, dan forum kolaboratif. Kami terus berinovasi untuk memberdayakan petani dengan alat yang mereka butuhkan untuk tanaman yang lebih sehat.</motion.p>
                </div>
            </div>
        </div>

    )
}

export default About
