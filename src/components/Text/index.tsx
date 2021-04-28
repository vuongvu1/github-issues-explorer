import React from "react";
import SC from "./styles";

export enum TextType {
  H1 = "h1",
  H2 = "h2",
  BODY = "p",
}

interface Props {
  type?: TextType;
  color?: string;
}

const Text: React.FC<Props> = ({ type, color, children }) => {
  return (
    <SC.Container as={type || "div"} type={type} color={color}>
      {children}
    </SC.Container>
  );
};

export default Text;
