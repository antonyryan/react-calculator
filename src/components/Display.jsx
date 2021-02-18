import React from "react";

const Display = ({ expression, userInput, total, formatVal, evaluated }) => (
   <div className="calculator__output">
      <span className="calculator__input">{expression}</span>
      <span
         className={`calculator__total ${
            userInput.length >= 10 ||
            (evaluated && total.toString().length >= 10)
               ? "calculator__total--shrink"
               : ""
         }`}
      >
         {expression || userInput
            ? !userInput
               ? 0
               : formatVal(userInput)
            : formatVal(total)}
      </span>
   </div>
);

export default Display;
