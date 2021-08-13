import React from "react";
import { formatVal } from "../helpers/formatVal";

const Display = ({ expression, userInput, total, evaluated }) => {
   return (
      <section className="calculator__output">
         <span className="calculator__input">{expression}</span>
         <span className="calculator__total">
            {!userInput && evaluated && formatVal(total)}
            {!userInput && !evaluated && 0}
            {userInput && !evaluated && formatVal(userInput)}
         </span>
      </section>
   );
};

export default Display;
