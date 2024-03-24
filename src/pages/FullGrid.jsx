import { useEffect, useRef, useState } from "react";
import Day from "../components/Day";
import SymptomColumn from "../components/SymptomColumn";
import blankTemplate from "../utils/gridData";
const FullGrid = ({ reset }) => {
  const [gridData, setGridData] = useState(blankTemplate);
  console.log("reset is", reset);
  useEffect(() => {
    if (reset) {
      setGridData(blankTemplate);
      localStorage.clear();
      console.log("local storage has been cleared");
    }
  }, [reset]);

  const handleUpdate = (day, symptom, update) => {
    setGridData((prev) => {
      const copy = [...prev];
      copy[day][symptom] = update;
      return copy;
    });
  };
  const timerRef = useRef(null);

  useEffect(() => {
    const previousGrid = localStorage.getItem("gridData");
    if (previousGrid) {
      setGridData(JSON.parse(previousGrid));
    }
  }, []);

  const setLocalStorage = () => {
    console.log("setting this to localStorage", gridData);
    localStorage.setItem("gridData", JSON.stringify(gridData));
    console.log("added to localStorage");
  };

  const resetTimer = () => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(setLocalStorage, 3000);
  };

  //   useEffect(() => {
  //     resetTimer();

  //     return () => clearTimeout(timerRef.current);
  //   }, []);

  document.addEventListener("click", resetTimer);

  return (
    <div className="flex justify-start items-end mt-4">
      <SymptomColumn />
      {gridData.map((item, index) => (
        <Day
          key={index}
          number={index + 1}
          updateGrid={handleUpdate}
          gridData={gridData[index]}
        />
      ))}
    </div>
  );
};

export default FullGrid;
