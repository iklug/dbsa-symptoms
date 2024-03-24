import { useState } from "react";

const GridCell = ({ intensity, updateGrid, day, index }) => {
  //   const [intensity, setIntensity] = useState(0);

  const color = [
    "",
    "bg-green-500",
    "bg-yellow-300",
    "bg-orange-400",
    "bg-pink-600",
  ];

  const handleClick = () => {
    // intensity === 4 ? setIntensity(0) : setIntensity(intensity + 1);
    intensity === 4
      ? updateGrid(day, index, 0)
      : updateGrid(day, index, intensity + 1);
  };

  return (
    <div
      className={`h-8 w-8 ${color[intensity]} border border-gray-200 shrink-0 transition-colors duration-100`}
      onClick={handleClick}
    ></div>
  );
};

export default GridCell;
