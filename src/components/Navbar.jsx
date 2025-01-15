import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "/assets/logo.png";

function NavbarHero() {
  const [toggle, setToggle] = useState(false);


  const navList = [
    { name: "Home", url: "/" },
    { name: "About us", url: "#about" },
    { name: "Features", url: "#feature" },
    { name: "Our Team", url: "#team" },
  ];

  const handleToggleSidebar = () => {
    setToggle(!toggle);
  };

  return (
      <div className='sticky top-0 left-0 w-full z-20 transition-transform duration-300 mt-12 backdrop-blur-sm'>
      <div className={`container mx-auto flex flex-wrap md:flex-nowrap justify-between border rounded-full p-4 items-center`}>
        <a className='ml-6' href="/"><img src={Logo} alt="greenvision" /></a>
        <div className="hidden md:flex items-center gap-12">
          {navList.map((items, index) => {
            return (
              <div className="my-2" key={index}>
                <a className="text-white hover:text-second_text" href={items.url}>{items.name}</a>
              </div>
            );
          })}
        </div>
        <div className="md:hidden">
          <button onClick={handleToggleSidebar}>
            <i className="text-2xl mt-2 fa-solid fa-bars"></i>
          </button>
          {toggle && (
            <div className="absolute w-full top-12 right-0 p-4 bg-primary">
              <div className="p-4">
                {navList.map((items, index) => {
                  return (
                    <div className="my-2" key={index}>
                      <a className="text-white" href={items.url}>{items.name}</a>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="p-1 rounded-lg">
          <div className='bg-[#314632] text-white p-2 rounded-full px-4'>
            <a href="/register">Contact Us</a>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default NavbarHero;
