import React from "react";
import { ImStarFull } from "react-icons/im";

type TestProps = {
  description: string;
  image: string;
  name: string;
  position: string;
};

const TestimonialCard = (props: TestProps) => {
  return (
    <div>
      <div className="flex flex-col p-4 rounded-md border-[1px] border-black gap-4 w-full max-w-[1152px] ">
        <div className="flex flex-row">
          <ImStarFull /> <ImStarFull /> <ImStarFull /> <ImStarFull />{" "}
          <ImStarFull />
        </div>
        <p>{props.description}</p>
        <div className="flex flex-row  gap-2">
          <img src={props.image} alt={props.name} className="rounded-full" />
          <div className="flex flex-col ">
            <h3 className="font-semibold">{props.name}</h3>
            <p>{props.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
