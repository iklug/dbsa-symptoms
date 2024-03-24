const IntensityScale = () => {
  return (
    <div className="flex flex-col gap-3 w-40 h-40 items-start relative">
      <div className="flex gap-2 h-8 w-40">
        <div className="h-6 w-6 border-2 border-white outline-gray-300 outline bg-green-500"></div>

        <div>
          <div className="text-xs font-semibold text-green-600">
            Mildly experiencing
          </div>
          <div className="text-[.7rem] -mt-1">this symptom</div>
        </div>
      </div>
      <div className="flex h-8" id="yellow">
        <div className="h-6 w-6  border-2 border-white outline-gray-300 outline bg-yellow-400"></div>
        <div></div>
      </div>

      <div className="flex h-8">
        <div className="h-6 w-6  border-2 border-white outline-gray-300 outline bg-orange-400"></div>
        <div></div>
      </div>
      <div className="flex gap-2 h-8">
        <div className="h-6 w-6 border-2 border-white outline-gray-300 outline bg-pink-700"></div>

        <div>
          <div className="text-xs text-pink-700 font-semibold">
            Extremely impaired
          </div>
          <div className="text-[.7rem] text-gray-500 -mt-1">
            by this symptom
          </div>
        </div>
      </div>
      <div
        className="h-48 w-48 bg-gray-200 opacity-60 absolute -z-10 -left-[85px] -top-8"
        id="cone"
      ></div>
    </div>
  );
};

export default IntensityScale;
