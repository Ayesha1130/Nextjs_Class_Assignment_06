import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full max-w-[1280px] p-[20px]">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="font-bold text-center pb-2">
            Subscribe to our newsletter
          </h1>
          <p className="text-center pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 ">
          <input
            type="search"
            name="searchbar"
            placeholder="Enter your email"
            className="border-[1px] border-black rounded-md p-3 md:px-4 md:py-2 "
          />
          <button className="border-[1px] border-black rounded-md hover:bg-black hover:text-primary p-3 md:py-2 ">
            Subscribe
          </button>
        </div>
      </div>

      <p className="text-center md:text-end mt-3  ">
        By subscribing you agree to with our Privacy Policy
      </p>

      <div className="flex flex-col md:flex-row justify-between my-10 px-20 gap-5  ">
        <div className="w-[130.6] h-[30.38] gap-[8.02] justify-center items-center ">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={130.6}
            height={30.38}
          />
        </div>

        <div className="text-center md:text-start">
          <h1 className="font-bold pb-2">Courses</h1>
          <ul>
            <li className="pb-3">Business</li>
            <li className="pb-3">Development</li>
            <li className="pb-3">Technology</li>
            <li className="pb-3">Design</li>
            <li className="pb-3">Programming</li>
          </ul>
        </div>

        <div className="text-center md:text-start">
          <h1 className="font-bold pb-2">Resources</h1>
          <ul>
            <li className="pb-3">Career</li>
            <li className="pb-3">Resume</li>
            <li className="pb-3">Learning</li>
            <li className="pb-3">Interview Preparation</li>
            <li className="pb-3">jobs</li>
          </ul>
        </div>

        <div className="text-center md:text-start">
          <h1 className="font-bold pb-2">About Us</h1>
          <ul>
            <li className="pb-3">Contact</li>
            <li className="pb-3">Help/Support</li>
            <li className="pb-3">FAQ</li>
            <li className="pb-3">Terms and Conditions</li>
            <li className="pb-3">Partners</li>
          </ul>
        </div>
      </div>

      <hr className="border-t-2  border-text" />

      <div className="flex flex-col gap-5  md:flex-row mt-5">
        <h3>2023 Ddsgnr. All right reserved.</h3>
        <div className="flex flex-row gap-3">
          <Link href={"/"} className="hover:text-gray-700 underline">
            Privacy Policy
          </Link>
          <Link href={"/"} className="hover:text-gray-700 underline">
            Terms of Service
          </Link>
          <Link href={"/"} className="hover:text-gray-700 underline">
            Cookie Policy
          </Link>
        </div>
      </div>

      <div className="flex gap-5 md:mt-10 mt-5 justify-end">
        <FaFacebookF size={20} />
        <FaLinkedin size={20} />
        <FaTwitter size={20} />
        <FaGithub size={20} />
      </div>
    </div>
  );
};

export default Footer;
