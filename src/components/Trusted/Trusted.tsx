import React from "react";

const Trusted = () => {
  return (
    <div className="flex justify-between items-center  w-full max-w-[1280px] bg-secondary h-[228px] px-[10px] py-[40px]">
      <div className=" flex flex-col md:flex-row justify-start items-start   w-full mb-4 md:mb-0 gap-10">
        <h1 className=" w-[420px] h-[64px] font-bold font-[Roboto] text-lg sm:text-xl md:text-2xl ">
          Trusted by the world's best companies <br />
          [social proof to build credibility]
        </h1>

        <div className="  flex  justify-between items-center overflow-x-auto  ">
          <img
            src="/images/one.png"
            alt="trusted-2"
            className="w-[123.8px] h-[50.52px]"
          />
          <img
            src="/images/two.png"
            alt="trusted-2"
            className="w-[123.8px] h-[50.52px]"
          />
          <img
            src="/images/three.png"
            alt="trusted-3"
            className="w-[123.8px] h-[50.52px]"
          />
          <img
            src="/images/four.png"
            alt="trusted-4"
            className="w-[123.8px] h-[50.52px]"
          />
          <img
            src="/images/five.png"
            alt="trusted-5"
            className="w-[123.8px] h-[50.52px]"
          />
          <img
            src="/images/six.png"
            alt="trusted-6"
            className="w-[123.8px] h-[50.52px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
