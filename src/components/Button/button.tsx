import React from "react";
import { CustomButton } from "./styles";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const { label } = props;
  return (
    <CustomButton backgroundColor="#EA5284" color="#FFFFFF">
      {label}
    </CustomButton>
  );
};

export default Button;
