import React from "react";

type propCard = {
  icon: React.ReactNode;
  name: string;
  description: string;
};

const CateCard = (props: propCard) => {
  const { icon, name, description } = props;

  return (
    <div className="flex flex-row gap-3 p-4 rounded-md bg-gray-300">
      <div className="items-center justify-center flex border p-4 rounded-md text-2xl sm:text-xl bg-white">
        {props.icon}
      </div>

      <div className="flex flex-col justify-center space-y-1 text-left">
        <h3 className="text-xl sm:text-2xl font-bold ">{props.name}</h3>
        <p className="text-sm  ">{props.description}</p>
      </div>
    </div>
  );
};

export default CateCard;
