import { initialState } from "./state";
import { actions } from "./actions";
import { formatVal } from "../helpers/formatVal";
import { calculateTotal } from "../helpers/calculateTotal";

export const reducer = (state, action) => {
   switch (action.type) {
      case actions.setTotal:
         const newTotal = calculateTotal(state.expression, state.userInput);
         return {
            ...state,
            total: newTotal,
            previousValue: state.userInput,
            expression: "",
            evaluated: true,
            disabled: true,
            operantSelected: false,
            userInput: "",
         };

      case actions.clearTotal:
         return {
            ...initialState,
         };

      case actions.appendPrevious:
         const { userInput } = state;

         if (userInput.charAt(0) === "0" && +action.payload >= 1) {
            return {
               ...state,
               userInput: action.payload,
            };
         }

         if (userInput.length === 7) {
            return {
               ...state,
               disabled: true,
            };
         }

         return {
            ...state,
            userInput: userInput + action.payload,
            operantSelected: false,
         };
      case actions.setDecimal:
         if (state.evaluated) {
            return {
               ...state,
               total: state.total / 100,
            };
         }

         return {
            ...state,
            userInput: `${+state.userInput / 100}`,
         };
      case actions.setReversal:
         let totalVal = state.total.toString();
         let userInputVal = parseFloat(state.userInput);

         totalVal = totalVal.slice(1, totalVal.length);

         if (state.evaluated) {
            if (Math.sign(state.total) === 1) {
               return {
                  ...state,
                  total: parseInt(`-${state.total}`),
               };
            }

            return {
               ...state,
               total: +totalVal,
            };
         }

         if (Math.sign(userInputVal) === 1) {
            return {
               ...state,
               userInput: `-${userInputVal}`,
            };
         }

         return {
            ...state,
            userInput: userInputVal.toString().slice(1, userInputVal.length),
         };

      case actions.setOperant:
         const { evaluated, expression, previousValue, total } = state;
         const currentExpression = `${formatVal(state.userInput)} ${
            action.payload
         }`;

         if (previousValue && !evaluated) {
            let newTotal = eval(
               `${expression.replace(",", "")} ${state.userInput}`
            );

            return {
               ...state,
               total: newTotal,
               expression: `${formatVal(newTotal)} ${action.payload}`,
               previousValue: state.userInput,
               userInput: "",
            };
         }

         if (previousValue && evaluated) {
            return {
               ...state,
               expression: `${formatVal(total)} ${action.payload}`,
               evaluated: false,
               disabled: false,
            };
         }

         return {
            ...state,
            expression: currentExpression,
            previousValue: state.userInput,
            userInput: "",
            operantSelected: true,
            disabled: false,
         };
   }

   return {
      ...state,
   };
};
