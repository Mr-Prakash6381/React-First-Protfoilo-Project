import React, { useState } from "react";
import { Link } from "react-scroll";
import { MdLightMode } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex lg:flex-row  lg:justify-between  lg:items-center  sticky top-3 z-10 ">
      <h1 className="text-2xl font-bold text-green-400 ">Portfolio</h1>
      <ul className="flex flex-row    font-bold text-white items-end justify-end">
        <div className="flex flex-row gap-10">
          <ol className="hidden lg:flex flex-row gap-10">
            <Link
              to="/"
              smooth={true}
              duration={500}
              className="hover:border-b-2 hover:text-green-400"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:border-b-2 hover:text-green-400"
            >
              About
            </Link>
            <Link
              to="education"
              smooth={true}
              duration={500}
              className="hover:border-b-2 hover:text-green-400"
            >
              Education
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:border-b-2 hover:text-green-400"
            >
              Skills
            </Link>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="hover:border-b-2 hover:text-green-400"
            >
              Project
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:border-b-2 hover:text-green-400"
            >
              Contact
            </Link>
          </ol>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
