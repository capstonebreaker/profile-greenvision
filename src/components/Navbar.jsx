import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [toggle, setToggle] = useState(false);

    const navList = [
        {
            name: "Home",
            url: "/"
        },
        {
            name: "About us",
            url: "/about"
        },
        {
            name: "Our Product",
            url: "/product"
        },
        {
            name: "Projects",
            url: "/project"
        },
        {
            name: "News",
            url: "/news"
        },
        {
            name: "Contact Us",
            url: "/contact"
        },
    ]

    const handleToggleSidebar = () => {
        setToggle(!toggle)
    }

    const handleToggleDropdown = (index) => {
        setShowDropdown(prevState => ({
            ...prevState, [index]: !prevState[index]
        }));
    }

    return (
        <div className="text-white sticky top-0 z-20">
            <div className="flex flex-wrap md:flex-nowrap justify-between mx-4 p-4 items-center bg-primary">
                <a href="/" className="text-white font-bold text-2xl">Radar <span className="text-second">Konoha</span></a>
                <div className="hidden md:flex items-center gap-12 md:gap-12 bg-primary ">
                    {navList.map((items, index) => {
                        return (
                            <div className="bg-primary my-2" key={index}>
                                <Link className="bg-primary" key={index} to={items.url}>{items.name}</Link>
                            </div>
                        );
                    })}
                </div>
                <div className="md:hidden bg-primary">
                    <button onClick={handleToggleSidebar}>
                        <i className="bg-primary text-2xl mt-2 fa-solid fa-bars "></i>
                    </button>
                    {toggle && (
                        <div className="absolute w-full top-12 right-0 p-4 bg-primary">
                            <div className="p-4 bg-primary">
                                {navList.map((items, index) => {
                                    return (
                                        <div className="bg-primary my-2" key={index}>
                                            <span className="bg-primary " onClick={() => handleToggleDropdown(index)}>
                                                <a className="bg-primary" key={index} href={items.url}>{items.name}</a>
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <div className="bg-second p-1 px-10 rounded-lg">
                    <a href="/register">Daftar Penulis</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
