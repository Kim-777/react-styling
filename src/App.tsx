import "./App.css";
import styled, { keyframes } from "styled-components";
import Circle from "./components/Circle";

const Father = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

const rotateAnimation = keyframes`
0% {
  transform: rotate(0deg);
  border-radius: 0px;
}
50% {
  transform: rotate(360deg);
  border-radius: 100px;
}
100% {
  transform: rotate(0deg);
  border-radius: 0px;
}
`;

const Imoji = styled.span`
  font-size: 40px;
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotateAnimation} 3s linear infinite;
  ${Imoji} {
    &:hover {
      font-size: 50px;
    }
  }
`;

function App() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="skyblue" />
      <Circle bgColor="blue" />
    </div>
  );
}

export default App;
