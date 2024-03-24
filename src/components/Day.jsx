import GridCell from "./GridCell";

const Day = ({ number, gridData, updateGrid }) => {
  //18 symptoms + 1 for day number

  const data = {
    number: 1,
    symptoms: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="border border-gray-200 border-t-transparent flex justify-center items-center text-sky-500 h-8 shrink-0 text-[.8rem] font-semibold">
        {number}
      </div>
      {gridData.map((item, index) => (
        <GridCell
          key={index}
          intensity={item}
          index={index}
          updateGrid={updateGrid}
          day={number - 1}
        />
      ))}
    </div>
  );
};

export default Day;
