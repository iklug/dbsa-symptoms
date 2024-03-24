import { useState, useRef, useEffect } from "react";

const MonthAndYear = ({ reset }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (reset) {
      setText("");
      localStorage.removeItem("monthAndYear");
    }
  }, [reset]);

  const typingTimer = useRef(null);

  useEffect(() => {
    const previousDate = localStorage.getItem("monthAndYear");
    if (previousDate) {
      setText(previousDate);
    }
  }, []);

  const saveToLocal = (text) => {
    localStorage.setItem("monthAndYear", text);
    console.log("added as well");
  };

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => {
      saveToLocal(newText);
    }, 5000);
  };

  return (
    <div className="">
      <input
        type="text"
        className="outline-none border-4 border-sky-500 text-sky-600 p-2 h-10 w-56 text-center text-xl font-semibold placeholder-sky-600"
        placeholder={`Month / Year`}
        value={text}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default MonthAndYear;
