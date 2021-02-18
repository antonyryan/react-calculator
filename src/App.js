import React, { useState } from "react";
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";

import "./App.scss";

const App = () => {
   const [previousValue, setPreviousValue] = useState(0);
   const [total, setTotal] = useState(0);
   const [expression, setExpression] = useState("");
   const [evaluated, setEvaluated] = useState(false);
   const [disabled, setDisabled] = useState(false);
   const [operationSelected, setOperationSelected] = useState(false);
   let [userInput, setUserInput] = useState("");

   const appendPrevious = (e) => {
      if (!userInput.length && e.target.value === "0") return;
      if (userInput.length === 18) setDisabled(true);

      setUserInput((userInput += e.target.value));
      setOperationSelected(false);
   };

   const handleOperation = (e) => {
      let previous = userInput.slice();
      setOperationSelected(true);
      setDisabled(false);

      if (previousValue && !evaluated) {
         let updatedTotal = eval(`${expression.replace(",", "")} ${userInput}`);

         setPreviousValue(previous);
         setExpression(`${formatVal(updatedTotal)} ${e.target.value}`);
         setTotal(updatedTotal);
         setUserInput("");
         return;
      }

      if (previousValue && evaluated) {
         setExpression(`${formatVal(total)} ${e.target.value}`);
         setEvaluated(false);
         setDisabled(false);
         return;
      }

      let currentExpression = `${formatVal(previous)} ${e.target.value}`;

      setExpression(currentExpression);
      setPreviousValue(previous);
      setUserInput("");
      return;
   };

   const clearTotal = () => {
      setTotal(0);
      setUserInput("");
      setPreviousValue(0);
      setExpression("");
      setEvaluated(false);
      setDisabled(false);
      setOperationSelected(false);
   };

   const calculateTotal = () => {
      let previous = userInput.slice();
      let calculatedTotal = eval(`${expression.replace(",", "")} ${previous}`);

      setTotal(calculatedTotal);
      setPreviousValue(calculatedTotal);
      setExpression("");
      setEvaluated(true);
      setDisabled(true);
      setUserInput("");
      setOperationSelected(false);
   };

   const reverseSign = () => {
      if (!userInput.length) return;

      let userInputValue = parseInt(userInput);

      if (evaluated) {
         if (Math.sign(total) === 1) {
            setTotal(parseInt(`-${total}`));
            return;
         }

         let totalValue = total.toString();
         totalValue = totalValue.slice(1, totalValue.length);

         setTotal(parseInt(totalValue));
         return;
      }

      if (Math.sign(userInputValue) === 1) {
         setUserInput(`-${userInputValue}`);
         return;
      }

      userInputValue = userInputValue
         .toString()
         .slice(1, userInputValue.length);
      setUserInput(userInputValue);
   };

   const convertToDec = () => {
      if (!userInput.length) return;

      if (evaluated) {
         setTotal(total / 100);
         return;
      }

      let userInputValue = userInput.slice();

      userInputValue = parseInt(userInput) / 100;
      setUserInput(`${userInputValue}`);
   };

   const formatVal = (val) => {
      val = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      if (val.includes(".")) {
         let decBreak = val.indexOf(".");

         for (let i = decBreak; i <= val.length - 1; i++) {
            if (val[i] === ",") {
               val = val.slice(0, i) + val.slice(i + 1);
            }
         }
      }

      return val;
   };

   return (
      <main className="calculator">
         <div className="calculator__container">
            <Display
               expression={expression}
               userInput={userInput}
               total={total}
               formatVal={formatVal}
               evaluated={evaluated}
            />
            <Keyboard
               clearTotal={clearTotal}
               reverseSign={reverseSign}
               convertToDec={convertToDec}
               operationSelected={operationSelected}
               userInput={userInput}
               evaluated={evaluated}
               disabled={disabled}
               appendPrevious={appendPrevious}
               handleOperation={handleOperation}
               calculateTotal={calculateTotal}
            />
         </div>
      </main>
   );
};

export default App;
