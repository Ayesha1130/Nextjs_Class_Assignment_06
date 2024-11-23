import React from "react";
import { ImStarFull } from "react-icons/im";
import Image from "next/image";

type TestProps = {
  description: string;
  image: string;
  name: string;
  position: string;
};

const TestimonialCard = ({description,image,name,position}: TestProps) => {
  return (
    <div>
      <div className="flex flex-col p-4 rounded-md border-[1px] border-black gap-4 w-full max-w-[1152px] ">
        <div className="flex flex-row">
          <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull />{" "}
          <ImStarFull />
        </div>
        <p>{description}</p>
        <div className="flex flex-row  gap-2">
          <Image src={image} alt={name} width={50} height={50}className="rounded-full" />
          <div className="flex flex-col ">
            <h3 className="font-semibold">{name}</h3>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
