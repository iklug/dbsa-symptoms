import Day from "../components/Day";
import FullGrid from "./FullGrid";
import Logo from "../components/Logo";
import Title from "../components/Title";
import MonthAndYear from "../components/MonthAndYear";
import IntensityScale from "../components/IntensityScale";
import CallForHelp from "../components/CallForHelp";
import ConfirmReset from "../components/ConfirmReset";
import { useState } from "react";

const MonthPage = () => {
  const [clear, setClear] = useState(false);
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setReset(true);
    setClear(false);
  };

  return (
    <div className="h-screen w-screen relative">
      <div className="flex items-end w-[1240px] justify-between">
        <div className="flex glex-grow shrink-0">
          <Logo />
          <Title />
        </div>
        <div className="flex gap-8">
          <MonthAndYear reset={reset} />
          <div
            className="text-gray-300 border-4 h-10 border-gray-300 font-semibold p-2 select-none hover:text-gray-600 hover:border-gray-600 flex justify-center items-center transition-colors ease-linear"
            onClick={() => setClear(true)}
          >
            Reset
          </div>
        </div>
      </div>

      <div className=" relative left-10 top-6 flex gap-6">
        <FullGrid reset={reset} />
        <div className="mt-6 flex flex-col justify-between">
          <IntensityScale />
          <CallForHelp />
        </div>
      </div>
      {clear && (
        <ConfirmReset
          confirmReset={handleReset}
          cancelReset={() => setClear(false)}
        />
      )}
    </div>
  );
};

export default MonthPage;
