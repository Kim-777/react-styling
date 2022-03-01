import "./App.css";
import styled, { keyframes } from "styled-components";
import Circle from "./components/Circle";
import CustomForm from "./components/CustomForm";

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

const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Box = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  animation: ${rotateAnimation} 3s linear infinite;
  ${Imoji} {
    &:hover {
      font-size: 50px;
    }
  }
`;

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

function App() {
  return (
    <div>
      <H1>타이틀입니당</H1>
      <Box>
        <Imoji>😏</Imoji>
      </Box>
      <CustomForm />
    </div>
  );
}

export default App;
