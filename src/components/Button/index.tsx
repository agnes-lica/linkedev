import { ReactNode } from "react";
import { Container } from "./style";
import { IconType } from "react-icons/lib";

interface ButtonProps {
  children: ReactNode | String;
  buttonFunction: () => void;
}

function Button({ children, buttonFunction }: ButtonProps) {
  return <Container onClick={buttonFunction}>{children}</Container>;
}

export default Button;
