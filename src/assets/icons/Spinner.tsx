import * as React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.svg`
  animation: 1s ${spin} infinite linear;
`;

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    //@ts-ignore
    <Spinner width="1em" height="1em" viewBox="0 0 48 48" {...props}>
      <circle cx={24} cy={4} r={4} fill="#000" />
      <circle cx={12.19} cy={7.86} r={3.7} fill="#000" />
      <circle cx={5.02} cy={17.68} r={3.4} fill="#000" />
      <circle cx={5.02} cy={30.32} r={3.1} fill="#000" />
      <circle cx={12.19} cy={40.14} r={2.8} fill="#000" />
      <circle cx={24} cy={44} r={2.5} fill="#000" />
      <circle cx={35.81} cy={40.14} r={2.2} fill="#000" />
      <circle cx={42.98} cy={30.32} r={1.9} fill="#000" />
      <circle cx={42.98} cy={17.68} r={1.6} fill="#000" />
      <circle cx={35.81} cy={7.86} r={1.3} fill="#000" />
    </Spinner>
  );
}

export default SvgComponent;
