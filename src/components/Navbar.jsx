import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import PDF from '../pdf/MJR.pdf'


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 ">
      <div>
        <span className="text-pink-600 font-bold tracking-wide text-xl underline underline-offset-8">
          MJR Portfolio
        </span>
      </div>
      {/* Manu */}
      <ul className="hidden md:flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
        <a href="/about">About</a>
        </li>
        <li>
        <a href="/skills">Skills</a>
        </li>
        <li>
        <a href="/work">Work</a>
        </li>
        <li>
        <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleclick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile manu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-3 text-4xl">
        <a href="/">Home</a>
        </li>
        <li className="py-3 text-4xl">
        <a href="/about">About</a>
        </li>
        <li className="py-3 text-4xl">
        <a href="/skills">Skills</a>
        </li>
        <li className="py-3 text-4xl">
        <a href="/work">Work</a>
        </li>
        <li className="py-3 text-4xl">
        <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* social icons */}
      <div className="hidden lg:flex flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/muhammad-jawwad-raza-77444b242"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/jraza3363"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4e9283]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=jraza3363@gmail.com&su=Subject%20Here&body=Body%20Text%20Here"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
              href={PDF}
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
    )
}

export default Navbar