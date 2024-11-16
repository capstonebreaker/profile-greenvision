import React from 'react';
import HeroImg from "../../../public/assets/hero.png";
import Logo from "../../../public/assets/logo.png";
import NavbarHero from '../../components/NavbarHero';

function Hero() {
  return (
    <div className="relative w-full h-screen z-10">
      <NavbarHero />
      <img
        src={HeroImg}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-green-950 opacity-30"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 container mx-auto text-primary_text">
        <img src={Logo} alt="GreenVision" />
        <p>Green <span className='text-second_text' >Vision</span></p>

        <div className="relative flex justify-center text-center items-center mb-2 mt-6">
          <h1 className="text-5xl md:text-6xl font-bold font-archivo relative w-1/2 animate-text">
            Aplikasi efisien untuk deteksi cepat dan solusi masalah tanaman
          </h1>
        </div>
        <div className='mt-12 inline-flex items-center p-1 text-sm font-medium text-center text-black bg-white rounded-full'>
          <button className='flex-grow text-center px-6 font-normal'>Get Mobile App</button>
          <div className='flex items-center justify-center bg-second_bg rounded-full h-12 w-12 ml-2'>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
