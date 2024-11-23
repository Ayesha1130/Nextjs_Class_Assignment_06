import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Image from "next/image";

type teamProps = {
  image: string;
  title: string;
  description: string;
};
const TeamCard = ({image,title,description}: teamProps) => {
  return (
    <div className="flex flex-col items-center  gap-y-2">
      <Image src={image} alt={title} width={50} height={50} className="mb-3 rounded-sm" />
      <div className="justify-center items-center">
        <h2 className="text-center">{title}</h2>
        <p className="font-medium">{description}</p>
      </div>
      <div className="flex justify-center gap-x-2">
        <FaLinkedin />
        <FaTwitter />
        <FaGithub />
      </div>
    </div>
  );
};

export default TeamCard;
