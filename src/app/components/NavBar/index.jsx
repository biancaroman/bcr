'use client'
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/img/logobcr.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setNav(false);
  };

  return (
    <div className={`bg-black bg-opacity-50 w-full min-h-[40px] flex justify-between lg:justify-center items-center absolute z-10 text-white`}>
      <div className="flex items-center">
        <Image className="lg:ml-20 w-40" src={logo} alt="logobcr" style={{ filter: 'brightness(0) invert(1)' }} />
      </div>
      <ul className="hidden sm:flex px-10">
        <NavItem link="/" activeLink={activeLink} onClick={handleLinkClick}>HOME</NavItem>
        <NavItem link="/quem-somos" activeLink={activeLink} onClick={handleLinkClick}>QUEM SOMOS</NavItem>
        <NavItem link="/nossos-servicos" activeLink={activeLink} onClick={handleLinkClick}>SERVIÇOS</NavItem>
        <NavItem link="/galeria-imagens" activeLink={activeLink} onClick={handleLinkClick}>GALERIA</NavItem>
        <NavItem link="/investidor" activeLink={activeLink} onClick={handleLinkClick}>SEJA NOSSO INVESTIDOR</NavItem>
        <NavItem link="/contato" activeLink={activeLink} onClick={handleLinkClick}>CONTATO</NavItem>
      </ul>
    
      {/* Hamburger Icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={`${
          nav
            ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
        }`}
      >
        <ul className="h-full w-full text-center pt-12 ">
          <NavItem link="/" activeLink={activeLink} onClick={handleLinkClick}>Home</NavItem>
          <NavItem link="/quem-somos" activeLink={activeLink} onClick={handleLinkClick}>Quem Somos</NavItem>
          <NavItem link="/nossos-servicos" activeLink={activeLink} onClick={handleLinkClick}>Serviços</NavItem>
          <NavItem link="/galeria-imagens" activeLink={activeLink} onClick={handleLinkClick}>Galeria</NavItem>
          <NavItem link="/investidor" activeLink={activeLink} onClick={handleLinkClick}>Seja nosso Investidor</NavItem>
          <NavItem link="/contato" activeLink={activeLink} onClick={handleLinkClick}>Contato</NavItem>
        </ul>
      </div>
    </div>
  );
};

const NavItem = ({ link, onClick, children }) => {

  return (
    <li
      className={` text-base`}
      onClick={() => onClick(link)}
    >
      <Link href={link}>{children}</Link>
    </li>
  );
};

export default NavBar;