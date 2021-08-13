export const calculateTotal = (expression, userInput) => {
   let total = eval(`${expression.replace(",", "")} ${userInput}`);
   return Math.round(1000 * total) / 1000;
};
