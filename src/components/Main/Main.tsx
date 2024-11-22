import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <div className="w-full max-w-[1280px] flex flex-col md:flex-row">
      <div className=" flex flex-col justify-center w-full items-center md:px-4 gap-y-9 pt-7 md:items-start md:mx-12 bg-primary">
        {/* Text Section */}
        <div className=" flex flex-col md:text-left md:gap-y-7 w-full max-w-[500px] gap-8 py-6 px-5">
          <h1 className=" font-[Roboto] font-bold   text-3xl md:text-4xl lg:text-5xl ">
            Learn new skills online with ease
          </h1>

          <p className="font-sans md:h-[54px] text-lg md:text-xl">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>

          {/* button Section */}
          <div className="flex gap-2">
            <button className=" rounded-[5px] border-[1px] border-text py-2 px-4 sm:py-3 sm:px-5 md:py-4 md:px-6 ">
              Start learning now
            </button>

            <button className=" rounded-[5px] border-[1px]   bg-text text-primary py-2 px-4  sm:py-3 sm:px-5 md:py-4 md:px-6 ">
              Explore Courses
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Image
          src="/images/girl1.jpg"
          alt="Hero Image"
          width={720}
          height={100}
        ></Image>
      </div>
    </div>
  );
};

export default Main;
