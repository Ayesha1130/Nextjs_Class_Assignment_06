import React from "react";
import Image from "next/image";
import { MdStarRate } from "react-icons/md";

type courseType = {
  image: string;
  cate: string;
  rate: string;
  title: string;
  discription: string;
  price: string;
};

const CourseCard = (prop: courseType) => {
  return (
    <div className="flex justify-center  bg-secondary rounded-md">
      <div className="w-full hover:scale-110 transition-transform rounded-lg p-4 m-4 shadow-xl bg-primary h-auto max-w-[416px]">
        {/* Image section */}
        <div className="w-full h-[200px] relative mb-3">
          <Image
            src={prop.image}
            alt={prop.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          ></Image>
        </div>
        {/* info section */}

        <div className="flex justify-between  bg-secondary rounded-md">
          <h1 className="text-lg font-semibold justify-start">{prop.cate}</h1>
          <p className="text-gray-500 flex gap-3">
            <MdStarRate size={20} />
            {prop.rate}
          </p>
        </div>
        {/* des section */}

        <div className="flex flex-col mb-4 ">
          <h2 className="text-xl font-bold">{prop.title}</h2>
          <p className="text-gray-600">{prop.discription}</p>
        </div>
        {/* price section */}

        <div className="flex gap-4 items-center ">
          <button className="px-3 py-2 border-[1px] border-black rounded-md mb-2">
            Enroll Now
          </button>
          <p className="text-lg font-semibold text-blue-600">{prop.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
