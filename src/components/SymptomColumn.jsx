import SymptomCell from "./SymptomCell";

const SymptomColumn = () => {
  const symptoms = [
    "Sadness/Despair",
    "Helplessness Hopelessness",
    "Agitation/Irritability",
    "Social Withdrawal",
    "Low Self-Esteem",
    "Low Motivation Loss of Interest",
    "Impulsivity",
    "Inability to Concentrate",
    "Aggressive Behavior",
    "Grandiose Ideas",
    "Racing Thoughts",
    "High Anxiety Excessive Worry",
    "Sleep Problems",
    "Headache",
    "Body Ache/Pain",
    "Change in Appetite",
    "Feelings of Guilt or Self Blame",
    "Thoughts of Death or Suicide",
  ];

  return (
    <div className="flex flex-col">
      <div className="border border-b-gray-200 border-t-0 border-l-0 text-sky-500 text-[.65rem] flex justify-center items-center h-8 font-bold shrink-0 pt-1 pr-1">
        Day of the Month
      </div>
      {symptoms.map((item, index) => (
        <SymptomCell name={item} key={index} />
      ))}
    </div>
  );
};

export default SymptomColumn;
