import React from "react";
import Key from "./Key";
import { actions } from "../state/actions";

const Keyboard = ({
   dispatch,
   disabled,
   evaluated,
   operantSelected,
   previousValue,
   total,
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

   const verifyInput =
      (total === 0 && !evaluated && !userInput) ||
      userInput === "." ||
      operantSelected;

   const handleAppendPrevious = (val) => {
      /* Validation to ensure that user cannot make consecutive zero selections.  */
      if (!userInput.length && val === "0" && !operantSelected) {
         return;
      }

      dispatch({
         type: appendPrevious,
         payload: val,
      });
   };

   const handleConvertToDec = (val) => {
      dispatch({
         type: setDecimal,
         payload: val,
      });
   };

   const handleReverseSign = () => {
      dispatch({
         type: setReversal,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      e.stopPropagation();

      let value = e.nativeEvent.submitter.value;
      const name = e.nativeEvent.submitter.name;

      switch (name) {
         case "clear":
            dispatch({ type: clearTotal });
            break;
         case "reverse":
            handleReverseSign();
            break;
         case "percentage":
            handleConvertToDec(value);
            break;
         case "operant":
            if (value === "÷") {
               value = "/";
            }

            if (value === "×") {
               value = "*";
            }

            dispatch({ type: setOperant, payload: value });
            break;
         case "integer":
            value = e.nativeEvent.submitter.value;
            handleAppendPrevious(value);
            break;
         case "decimal":
            dispatch({
               type: appendPrevious,
               payload: value,
            });
            break;
         case "compute":
            dispatch({ type: setTotal });
            break;
         default:
            break;
      }
   };

   return (
      <form className="calculator__options" onSubmit={handleSubmit}>
         <Key
            className="calculator__option calculator__option--operation"
            disabled={false}
            name="clear"
            value="C"
         />
         <Key
            className="calculator__option calculator__option--operation"
            disabled={verifyInput}
            name="reverse"
            value="±"
         />
         <Key
            className="calculator__option calculator__option--operation"
            disabled={verifyInput}
            name="percentage"
            value="%"
         />
         <Key
            className="calculator__option calculator__option--operation"
            disabled={
               operantSelected ||
               (!userInput.length && !evaluated) ||
               userInput === "."
            }
            name="operant"
            value="÷"
         />
         <Key
            className="calculator__option"
            disabled={disabled}
            name="integer"
            value="7"
         />
         <Key
            className="calculator__option"
            disabled={disabled}
            name="integer"
            value="8"
         />
         <Key
            className="calculator__option"
            disabled={disabled}
            name="integer"
            value="9"
         />
         <Key
            className="calculator__option calculator__option--operation"
            disabled={
               operantSelected ||
               (!userInput.length && !evaluated) ||
               userInput === "."
            }
            name="operant"
            value="×"
         />
         <Key
            className="calculator__option"
            disabled={disabled}
            name="integer"
            value="4"
         />
         <Key
            className="calculator__option"
            disabled={disabled}
            name="integer"
            value="5"
         />
         <Key
            className="calculator__option"
            disabled={disabled}
            name="integer"
            value="6"
         />
         <Key
            className="calculator__option calculator__option--operation"
            disabled={
               operantSelected ||
               (!userInput.length && !evaluated) ||
               userInput === "."
            }
            name="operant"
            value="-"
         />
         <Key
            className="calculator__option"
            disabled={disabled}
            name="integer"
            value="1"
         />
         <Key
            className="calculator__option"
            disabled={disabled}
            name="integer"
            value="2"
         />
         <Key
            className="calculator__option"
            disabled={disabled}
            name="integer"
            value="3"
         />
         <Key
            className="calculator__option calculator__option--operation"
            disabled={
               operantSelected ||
               (!userInput.length && !evaluated) ||
               userInput === "."
            }
            name="operant"
            value="+"
         />
         <Key
            className="calculator__option"
            disabled={disabled}
            name="integer"
            value="0"
         />
         <Key
            className="calculator__option"
            disabled={userInput.indexOf(".") !== -1 || disabled}
            name="decimal"
            value="."
         />
         <div></div>
         <Key
            className="calculator__option calculator__option--operation"
            disabled={
               !userInput.length ||
               (!previousValue && operantSelected) ||
               !previousValue ||
               (userInput.length === 1 && userInput.charAt(0) === ".")
            }
            name="compute"
            value="="
         />
      </form>
   );
};

export default Keyboard;
