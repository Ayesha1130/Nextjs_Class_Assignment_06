import React from "react";
import CourseCard from "@/components/CourseCard/CourseCard";

const Course = () => {
  const courseInfo = [
    {
      image: "/images/C1.jpg",
      cate: "Design",
      rate: "5.0",
      title: "UX/UI Design 201",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
    },
    {
      image: "/images/C2.jpg",
      cate: "Programmimg",
      rate: "5.0",
      title: "Introduction to Python",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
    },
    {
      image: "/images/C3.jpg",
      cate: "Business",
      rate: "5.0",
      title: "Data Analysis for Beginners",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
    },
    {
      image: "/images/C4.jpg",
      cate: "Art",
      rate: "5.0",
      title: "Art Specialization",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
    },
    {
      image: "/images/C5.jpg",
      cate: "Law",
      rate: "5.0",
      title: "Rule of Law",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
    },
    {
      image: "/images/C6.jpg",
      cate: "Tech",
      rate: "5.0",
      title: "Introduction to webflow",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      price: "$400",
    },
  ];
  return (
    <div>
      <div className="text-center py-9">
        <h1 className="font-bold text-4xl">Courses</h1>
        <p className="text-lg ">Your Ultimate Guide to learning</p>
      </div>

      <div className="justify-center items-center flex">
        <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
          {courseInfo.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>

      <div className="text-center mt-4 py-8">
        <button className="rounded-md border-[1px] border-text py-3 px-6 sm:text-md transition-transform hover:scale-90 ">
          View All Courses
        </button>
      </div>
    </div>
  );
};

export default Course;
