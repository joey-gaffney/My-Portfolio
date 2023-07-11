import React, { useState, useEffect, useRef } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const [activeLink, setActiveLink] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640 && isMobileMenuOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  const handleLinkTouchStart = (index) => {
    setActiveLink(index);
  };

  const handleLinkTouchEnd = () => {
    setActiveLink(null);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <ul className="hidden container mx-auto sm:flex justify-end gap-4 py-6 px-3">
        <li>
          <a
            href="#web-development-projects"
            className="font-bold tracking-tighter"
          >
            Projects
          </a>
        </li>
        <li>
          <a href="/" target="_blank" className="font-bold tracking-tighter">
            Resume
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joey-gaffney-618967183/"
            target="_blank"
            className="font-bold tracking-tighter"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://github.com/joey-gaffney"
            target="_blank"
            className="font-bold tracking-tighter"
          >
            Github
          </a>
        </li>
      </ul>
      <button
        className="absolute top-6 right-6 text-2xl sm:hidden"
        onClick={toggleMobileMenu}
      >
        {!isMobileMenuOpen ? <CiMenuFries /> : <AiOutlineClose />}
      </button>
      {isMobileMenuOpen && (
        <ul
          ref={menuRef}
          className="mobilenav h-screen w-3/4 flex flex-col justify-center items-center text-2xl px-4 sm:hidden"
        >
          <li className="w-full text-center">
            <a
              href="#web-development-projects"
              className={`font-bold tracking-tighter block rounded-lg py-4 ${
                activeLink === 1 ? "" : ""
              }`}
              onTouchStart={() => handleLinkTouchStart(1)}
              onTouchEnd={handleLinkTouchEnd}
              onClick={toggleMobileMenu}
            >
              Projects
            </a>
          </li>
          <li className="w-full text-center">
            <a
              href=" /"
              target="_blank"
              className={`font-bold tracking-tighter block rounded-lg py-4 ${
                activeLink === 2 ? "" : ""
              }`}
              onTouchStart={() => handleLinkTouchStart(2)}
              onTouchEnd={handleLinkTouchEnd}
              onClick={toggleMobileMenu}
            >
              Resume
            </a>
          </li>
          <li className="w-full text-center">
            <a
              href="https://www.linkedin.com/in/joey-gaffney-618967183/"
              target="_blank"
              className={`font-bold tracking-tighter block rounded-lg py-4 ${
                activeLink === 3 ? "" : ""
              }`}
              onTouchStart={() => handleLinkTouchStart(3)}
              onTouchEnd={handleLinkTouchEnd}
              onClick={toggleMobileMenu}
            >
              Linkedin
            </a>
          </li>
          <li className="w-full text-center">
            <a
              href="https://github.com/joey-gaffney"
              target="_blank"
              className={`font-bold tracking-tighter block rounded-lg py-4 ${
                activeLink === 4 ? "" : ""
              }`}
              onTouchStart={() => handleLinkTouchStart(4)}
              onTouchEnd={handleLinkTouchEnd}
              onClick={toggleMobileMenu}
            >
              Github
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
