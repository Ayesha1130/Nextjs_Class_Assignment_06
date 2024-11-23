
import React from "react";
import TeamCard from "@/components/TeamCard/TeamCard";

const Team = () => {
  const teamMembers = [
    {
      image: "/images/I1.png",
      title: "James Nduku",
      description: "Marketing Coordinator",
    },
    {
      image: "/images/I2.png",
      title: "Joseph Munyambu",
      description: "Nursing Assistant",
    },
    {
      image: "/images/I3.png",
      title: "Joseph Ngumbau",
      description: "Medical Assistant",
    },
    {
      image: "/images/I4.png",
      title: "Erick",
      description: "Web Designer",
    },
    {
      image: "/images/I5.png",
      title: "Stephen Kerubo",
      description: "President of Sales",
    },
    {
      image: "/images/I6.png",
      title: "John Leboo",
      description: "Dog Trainer",
    },
    
  ];
  return (
    <div className="bg-secondary">
      <div className="text-center ">
        <h1 className="text-4xl font-bold pt-10 pb-5">Our Team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

        <div className="w-full max-w-[1280px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[64px] mt-20">
          {teamMembers
            .filter(
              (member) => member.image && member.title && member.description
            )
            .map((items, index) => (
              <TeamCard
                key={index}
                image={items.image}
                title={items.title}
                description={items.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
