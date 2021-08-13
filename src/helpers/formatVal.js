export const formatVal = (val) => {
   let result;

   if (val.length === 1 || val.toString().charAt(0) === ".") {
      result = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return result;
   }

   let roundedVal = Math.round(1000 * eval(val)) / 1000;
   result = roundedVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

   if (result.includes(".")) {
      let decBreak = result.indexOf(".");

      for (let i = decBreak; i <= result.length - 1; i++) {
         if (result[i] === ",") {
            result = result.slice(0, i) + result.slice(i + 1);
         }
      }
   }

   return result;
};
