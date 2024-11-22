import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Link from "next/link";

const Tophead = () => {
  return (
    <div>
      <header className="hidden md:flex  bg-secondary  items-center border-[1px] border-[#676767] ">
        <div className=" w-full max:w-[1280px] h-[54px] top-[100px] left-[100px] pr-[64px] pl-[62px] flex items-center ">
          <h1 className="font-[Roboto]">
            Phone Number: 956 742 455 678 |
            <span className="w-[149px] h-[21px]"> Email:info@ddsgnr.com</span>
          </h1>
        </div>

        <div className="flex w-[736px] h-[24px] gap-[16px]  pr-[62px] pl-[530px]  ">
          <Link href={""}>
            <FaFacebookF />
          </Link>
          <Link href={""}>
            <FaInstagram />
          </Link>
          <Link href={""}>
            <FaTwitter />
          </Link>
          <Link href={""}>
            <FaLinkedin />
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Tophead;
