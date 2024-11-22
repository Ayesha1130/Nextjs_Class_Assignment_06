import React from "react";
import CateCard from "../CateCard";
import Link from "next/link";
import { SiAntdesign } from "react-icons/si";
import { SiGooglemarketingplatform, SiGamedeveloper } from "react-icons/si";
import { FaCreativeCommons } from "react-icons/fa";
import { GiDigitalTrace } from "react-icons/gi";
import { MdBusinessCenter, MdSettingsSuggest } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GiInnerSelf } from "react-icons/gi";

const Category = () => {
  // Your category data
  const categories = [
    {
      icon: <SiAntdesign />,
      name: "Design & Dev",
      description: "30+ Courses Available",
    },
    {
      icon: <SiGooglemarketingplatform />,
      name: "Marketing ",
      description: "30+ Courses Available",
    },
    {
      icon: <SiGamedeveloper />,
      name: "Development",
      description: "30+ Courses Available",
    },
    {
      icon: <FaCreativeCommons />,
      name: "Communication",
      description: "30+ Courses Available",
    },
    {
      icon: <GiDigitalTrace />,
      name: "Digital Marketing",
      description: "30+ Courses Available",
    },
    {
      icon: <GiInnerSelf />,
      name: "Self Development",
      description: "30+ Courses Available",
    },
    {
      icon: <MdBusinessCenter />,
      name: "Business ",
      description: "50+ Courses Available",
    },
    {
      icon: <FaMoneyCheckDollar />,
      name: "Finance",
      description: "40+ Courses Available",
    },
    {
      icon: <MdSettingsSuggest />,
      name: "Consulting",
      description: "50+ Courses Available",
    },
  ];

  return (
    <div className="text-center flex flex-col items-center py-12">
      <h1 className="text-3xl sm:text-2xl md:text-4xl font-bold mb-4 ">
        Explore Courses By Category
      </h1>
      <p className=" text-black mb-10 max-w-xl">
        Discover a wide range of courses covering a variety of subjects, taught
        by expert instructors.
      </p>

      <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3  gap-8 px-8 w-full max-w-6xl">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`${index > 2 ? "hidden sm:block" : "block"}`}
          >
            <CateCard {...item} />
          </div>
        ))}
      </div>

      <Link href="/course">
        <div className="text-center mt-4 py-8">
          <button className="rounded-md border-[1px] border-text py-3 px-6 sm:text-md transition-transform hover:scale-90 ">
            View All Courses
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Category;
