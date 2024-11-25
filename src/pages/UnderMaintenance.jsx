import React from "react";
import Mockup from '/assets/mockupGV.png';
import Countdown from "../components/Countdown";

const UnderMaintenance = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 25);

  return (
    <div className="flex items-center justify-center h-screen px-4 bg-gray-50">
      {/* Container utama */}
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Bagian teks */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Under Maintenance
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Our website is under maintenance, wait for some time.
          </p>
          {/* Countdown */}
          <div className="mt-6">
            <Countdown targetDate={targetDate} showFourUnits={true} />
          </div>
          {/* Link media sosial */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href="https://www.linkedin.com/in/m-bais-yufan-mardiansah-5b85b52a3/"
              className="text-gray-500 hover:text-blue-500 text-sm md:text-base"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        {/* Gambar mockup */}
        <div className="w-full max-w-xs md:max-w-md">
          <img
            src={Mockup}
            alt="Maintenance"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenance;
