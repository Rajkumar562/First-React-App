import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  // defining values help catch error when an invalid string is passed in app.tsx
  // '?' shows its optional i.e it is not necessary to add 'color' property it in add.tsx file
  atClick: () => void;
}

// primary color given here is default and is implemented when there is no color specified at app.tsx button
const Button = ({ children, atClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={atClick}>
      {" "}
      {children}
    </button>
  );
};

export default Button;
