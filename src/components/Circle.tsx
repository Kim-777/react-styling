import React from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  border-radius: 100px;
  border: 10px solid ${(props) => props.borderColor};
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleProps {
  bgColor: string;
  borderColor: string | undefined;
  text?: string;
}

export default function Circle({
  bgColor,
  borderColor,
  text = "기본 텍스트",
}: CircleProps) {
  const [value, setValue] = React.useState<number>();

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? "red"}>
      {text}
    </Container>
  );
}
