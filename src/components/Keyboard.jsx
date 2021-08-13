import React from "react";
import { actions } from "../state/actions";

const Keyboard = ({
   dispatch,
   disabled,
   evaluated,
   operantSelected,
   userInput,
}) => {
   const {
      appendPrevious,
      clearTotal,
      setDecimal,
      setOperant,
      setReversal,
      setTotal,
   } = actions;

   const verifyInput = (e) => {
      if (!userInput.length && e.target.value === "0") return;
   };

   const handleAppendPrevious = (e) => {
      verifyInput(e);
      dispatch({
         type: appendPrevious,
         payload: e.target.value,
      });
   };

   const handleConvertToDec = (e) => {
      verifyInput(e);
      dispatch({
         type: setDecimal,
         payload: e.target.value,
      });
   };

   const handleReverseSign = (e) => {
      verifyInput(e);
      dispatch({
         type: setReversal,
      });
   };

   return (
      <div className="calculator__options">
         <button
            className="calculator__option calculator__option--operation"
            onClick={() => dispatch({ type: clearTotal })}
         >
            C
         </button>
         <button
            className="calculator__option calculator__option--operation"
            onClick={(e) => handleReverseSign(e)}
         >
            ±
         </button>
         <button
            className="calculator__option calculator__option--operation"
            onClick={(e) => handleConvertToDec(e)}
         >
            %
         </button>
         <button
            className="calculator__option calculator__option--operation"
            value="/"
            onClick={(e) =>
               dispatch({ type: setOperant, payload: e.target.value })
            }
            disabled={operantSelected || (!userInput.length && !evaluated)}
         >
            ÷
         </button>
         <button
            className="calculator__option"
            value="7"
            onClick={(e) => handleAppendPrevious(e)}
            disabled={disabled}
         >
            7
         </button>
         <button
            className="calculator__option"
            value="8"
            onClick={(e) => handleAppendPrevious(e)}
            disabled={disabled}
         >
            8
         </button>
         <button
            className="calculator__option"
            value="9"
            onClick={(e) => handleAppendPrevious(e)}
            disabled={disabled}
         >
            9
         </button>
         <button
            className="calculator__option calculator__option--operation"
            value="*"
            onClick={(e) =>
               dispatch({ type: setOperant, payload: e.target.value })
            }
            disabled={operantSelected || (!userInput.length && !evaluated)}
         >
            ×
         </button>
         <button
            className="calculator__option"
            value="4"
            onClick={(e) => handleAppendPrevious(e)}
            disabled={disabled}
         >
            4
         </button>
         <button
            className="calculator__option"
            value="5"
            onClick={(e) => handleAppendPrevious(e)}
            disabled={disabled}
         >
            5
         </button>
         <button
            className="calculator__option"
            value="6"
            onClick={(e) => handleAppendPrevious(e)}
            disabled={disabled}
         >
            6
         </button>
         <button
            className="calculator__option calculator__option--operation"
            value="-"
            onClick={(e) =>
               dispatch({ type: setOperant, payload: e.target.value })
            }
            disabled={operantSelected || (!userInput.length && !evaluated)}
         >
            -
         </button>
         <button
            className="calculator__option"
            value="1"
            onClick={(e) => handleAppendPrevious(e)}
            disabled={disabled}
         >
            1
         </button>
         <button
            className="calculator__option"
            value="2"
            onClick={(e) => handleAppendPrevious(e)}
            disabled={disabled}
         >
            2
         </button>
         <button
            className="calculator__option"
            value="3"
            onClick={(e) => handleAppendPrevious(e)}
            disabled={disabled}
         >
            3
         </button>
         <button
            className="calculator__option calculator__option--operation"
            value="+"
            onClick={(e) =>
               dispatch({ type: setOperant, payload: e.target.value })
            }
            disabled={operantSelected || (!userInput.length && !evaluated)}
         >
            +
         </button>
         <button
            className="calculator__option"
            value="0"
            onClick={(e) => handleAppendPrevious(e)}
            disabled={disabled}
         >
            0
         </button>
         <button
            className="calculator__option"
            value="."
            onClick={(e) =>
               dispatch({
                  type: appendPrevious,
                  payload: e.target.value,
               })
            }
            disabled={userInput.indexOf(".") !== -1 || disabled}
         >
            .
         </button>
         <div></div>
         <button
            className="calculator__option calculator__option--operation"
            onClick={() => dispatch({ type: setTotal })}
            disabled={!userInput.length}
         >
            =
         </button>
      </div>
   );
};

export default Keyboard;
