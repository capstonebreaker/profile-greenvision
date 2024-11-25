import React from "react";
import maintance from "/assets/cabarcok.svg"
import Countdown from "../components/Countdown";

const UnderMaintenance = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 25);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">Under Maintenance</h1>
          <p className="text-gray-500 mt-2">Our website is under maintenance, wait for some time.</p>
          <div className="mt-6">
            <Countdown targetDate={targetDate} />
          </div>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a href="https://www.linkedin.com/in/m-bais-yufan-mardiansah-5b85b52a3/" className="text-gray-500 hover:text-blue-500">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
        <div>
          <img src={maintance} alt="Maintenance" />
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenance;
