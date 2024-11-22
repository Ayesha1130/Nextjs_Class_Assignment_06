import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

type teamProps = {
  image: any;
  title: any;
  description: any;
};
const TeamCard = (props: teamProps) => {
  return (
    <div className="flex flex-col items-center  gap-y-2">
      <img src={props.image} alt={props.title} className="mb-3 rounded-sm" />
      <div className="justify-center items-center">
        <h2 className="text-center">{props.title}</h2>
        <p className="font-medium">{props.description}</p>
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
