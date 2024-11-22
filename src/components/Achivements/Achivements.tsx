import React from "react";

const Achivements = () => {
  return (
    <div className=" flex flex-col justify-center w-full max-w-[1280px] h-auto   ">
      <div className="w-full  text-center  ">
        <h1 className=" font-bold text-3xl sm:text-4xl md:text-5xl mb-5">
          Our Achivements
        </h1>
        <p className="  font-[Roboto] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>
      <div className="flex flex-wrap justify-evenly font-[Roboto] gap-[36px] px-[64px] mt-10">
        <div className="text-center">
          <h2 className="font-extrabold text-3xl">+200</h2>

          <p>Courses </p>
        </div>

        <div className="text-center">
          <h2 className="font-extrabold text-3xl">50K</h2>
          <p>Mentors</p>
        </div>

        <div className="text-center">
          <h2 className="font-extrabold text-3xl">370k</h2>
          <p>Students</p>
        </div>
        <div className="text-center">
          <h2 className="font-extrabold text-3xl">100+</h2>
          <p>Recognition</p>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
