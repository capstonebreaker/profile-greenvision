import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../public/assets/logo.png";

function NavbarHero() {
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State untuk deteksi scroll

  const navList = [
    { name: "Home", url: "/" },
    { name: "About us", url: "/about" },
    { name: "Features", url: "/product" },
    { name: "Workflow", url: "/project" },
    { name: "Our Team", url: "/news" },
  ];

  // Fungsi untuk menghandle scroll
  const handleScroll = () => {
    if (window.scrollY > 850) {
      setIsScrolled(true); // Jika sudah scroll lebih dari 50px
    } else {
      setIsScrolled(false); // Kembali ke posisi awal
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleSidebar = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-20 transition-all mt-12 `}>
      <div className={`container mx-auto flex flex-wrap md:flex-nowrap justify-between border rounded-full p-4 items-center  ${isScrolled ? 'bg-primary_bg shadow-md' : 'bg-transparent'}`}>
        <a className='ml-6' href="/"><img src={Logo} alt="greenvision" /></a>
        <div className="hidden md:flex items-center gap-12">
          {navList.map((items, index) => {
            return (
              <div className="my-2" key={index}>
                <Link className="text-white hover:text-gray-600" to={items.url}>{items.name}</Link>
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
          <div className='bg-[#87e934] p-2 rounded-full px-4'>
            <a href="/register">Contact Us</a>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default NavbarHero;
