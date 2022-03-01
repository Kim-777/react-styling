import "./App.css";
import styled, { keyframes } from "styled-components";

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

const Text = styled.span`
  color: white;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  height: 30;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ require: true })`
  background-color: gainsboro;
`;

function App() {
  return (
    <Father style={{ display: "flex" }} as="header">
      <Box wrapperColor="skyblue">
        <Imoji>🤪</Imoji>
      </Box>
    </Father>
  );
}

export default App;
