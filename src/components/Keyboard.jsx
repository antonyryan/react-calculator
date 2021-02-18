import React from "react";

const Keyboard = ({
   clearTotal,
   reverseSign,
   convertToDec,
   operationSelected,
   userInput,
   evaluated,
   disabled,
   appendPrevious,
   handleOperation,
   calculateTotal,
}) => (
   <div className="calculator__options">
      <button
         className="calculator__option calculator__option--operation"
         onClick={clearTotal}
      >
         C
      </button>
      <button
         className="calculator__option calculator__option--operation"
         onClick={reverseSign}
      >
         ±
      </button>
      <button
         className="calculator__option calculator__option--operation"
         onClick={convertToDec}
      >
         %
      </button>
      <button
         className="calculator__option calculator__option--operation"
         value="/"
         onClick={(e) => handleOperation(e)}
         disabled={operationSelected || (!userInput.length && !evaluated)}
      >
         ÷
      </button>
      <button
         className="calculator__option"
         value="7"
         onClick={(e) => appendPrevious(e)}
         disabled={disabled}
      >
         7
      </button>
      <button
         className="calculator__option"
         value="8"
         onClick={(e) => appendPrevious(e)}
         disabled={disabled}
      >
         8
      </button>
      <button
         className="calculator__option"
         value="9"
         onClick={(e) => appendPrevious(e)}
         disabled={disabled}
      >
         9
      </button>
      <button
         className="calculator__option calculator__option--operation"
         value="*"
         onClick={(e) => handleOperation(e)}
         disabled={operationSelected || (!userInput.length && !evaluated)}
      >
         ×
      </button>
      <button
         className="calculator__option"
         value="4"
         onClick={(e) => appendPrevious(e)}
         disabled={disabled}
      >
         4
      </button>
      <button
         className="calculator__option"
         value="5"
         onClick={(e) => appendPrevious(e)}
         disabled={disabled}
      >
         5
      </button>
      <button
         className="calculator__option"
         value="6"
         onClick={(e) => appendPrevious(e)}
         disabled={disabled}
      >
         6
      </button>
      <button
         className="calculator__option calculator__option--operation"
         value="-"
         onClick={(e) => handleOperation(e)}
         disabled={operationSelected || (!userInput.length && !evaluated)}
      >
         -
      </button>
      <button
         className="calculator__option"
         value="1"
         onClick={(e) => appendPrevious(e)}
         disabled={disabled}
      >
         1
      </button>
      <button
         className="calculator__option"
         value="2"
         onClick={(e) => appendPrevious(e)}
         disabled={disabled}
      >
         2
      </button>
      <button
         className="calculator__option"
         value="3"
         onClick={(e) => appendPrevious(e)}
         disabled={disabled}
      >
         3
      </button>
      <button
         className="calculator__option calculator__option--operation"
         value="+"
         onClick={(e) => handleOperation(e)}
         disabled={operationSelected || (!userInput.length && !evaluated)}
      >
         +
      </button>
      <button
         className="calculator__option"
         value="0"
         onClick={(e) => appendPrevious(e)}
         disabled={disabled}
      >
         0
      </button>
      <button
         className="calculator__option"
         value="."
         onClick={(e) => appendPrevious(e)}
         disabled={userInput.indexOf(".") !== -1 || disabled}
      >
         .
      </button>
      <div></div>
      <button
         className="calculator__option calculator__option--operation"
         onClick={calculateTotal}
         disabled={!userInput.length}
      >
         =
      </button>
   </div>
);

export default Keyboard;
