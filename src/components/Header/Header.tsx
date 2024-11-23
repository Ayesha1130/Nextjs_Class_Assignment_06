"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex  justify-between items-center p-4 w-full max-w-[1280px] h-[72px] bg-secondary border-[1px] border-text">
      <button title="button" onClick={toggleMenu}>
        {!isOpen ? (
          <IoMdMenu size={20} className="md:hidden lg:hidden" />
        ) : (
          <RxCross2 size={20} className="md:hidden lg:hidden" />
        )}
      </button>
      <div className="w-[130.6] h-[30.38] gap-[8.02] justify-center md:items-center items-start ">
        <Image
          src={"/images/logo.png"}
          alt="logo"
          width={130.6}
          height={30.38}
        />
      </div>
      <div className="flex bg-primary gap-10">
        <nav className="  hidden md:block lg:block justify-between w-auto h-auto">
          <ul className="flex  gap-10 py-4 px-2 ">
            <li>
              <Link href={""}>Home</Link>
            </li>
            <li>
              <Link href={""}>Courses</Link>
            </li>
            <li>
              <Link href={""}>Services</Link>
            </li>
            <li>
              <Link href={""}>Achievement</Link>
            </li>
            <li>
              <Link href={""}>About Us</Link>
            </li>
            <li>
              <Link href={""}>Testimonial</Link>
            </li>
          </ul>
        </nav>
        <div className=" font-[Roboto] hidden md:block lg:block justify-center items-center py-4 ">
          <Link
            href={""}
            className="  items-center text-center bg-primary border-[1px] border-secondary  rounded-md px-[20px]  py-[8px]  "
          >
            <span className="hidden md:inline">Login</span>
          </Link>
          <Link
            href={""}
            className=" items-center  rounded-md  bg-black text-primary px-[20px]  py-[8px] ml-4"
          >
            <span className="hidden md:inline">Sign Up</span>
          </Link>
        </div>
      </div>

      {isOpen && (
        <nav className=" md:hidden lg:hidden">
          <ul className="flex flex-col font-[Roboto] gap-4 p-4 bg-secondary w-full h-full  absolute top-16 left-2 text-center mt-1 rounded-lg shadow-lg">
            <li>
              <Link href={""}>Home</Link>
            </li>
            <li>
              <Link href={""}>Courses</Link>
            </li>
            <li>
              <Link href={""}>Services</Link>
            </li>
            <li>
              <Link href={""}>Achievement</Link>
            </li>
            <li>
              <Link href={""}>About Us</Link>
            </li>
            <li>
              <Link href={""}>Testimonial</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
