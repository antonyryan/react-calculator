import React from "react";

const Key = ({ className, disabled, name, value }) => (
   <input
      aria-label={name === "operant" || name === "integer" ? value : name}
      className={className}
      disabled={disabled}
      name={name}
      type="submit"
      value={value}
   />
);

export default Key;
