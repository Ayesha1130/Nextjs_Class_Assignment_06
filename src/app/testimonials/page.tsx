import React from "react";
import TestimonialCard from "@/components/TestimonialsCard/TestimonialCard";

const Testimonials = () => {
  const testimonialsData = [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/images/I3.png",
      name: "James",
      position: "Software Developer",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/images/I1.png",
      name: "Erick Kipkemboi",
      position: "Scrum Master",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/images/I6.png",
      name: "Stephen Kerubo",
      position: "UI/UX Designer",
    },
  ];
  return (
    <div>
      <div className="flex flex-col  bg-secondary   py-[112px] px-5  ">
        <h1 className=" font-bold text-4xl  mb-3  hidden sm:block ">
          Customer Testimonials
        </h1>
        <h1 className="font-bold text-2xl  mb-3 block sm:hidden ">
          What Our Student Say
        </h1>

        <p className="font-[Roboto] text-xl mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-6 ">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
