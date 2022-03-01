import "./App.css";
import styled, { keyframes } from "styled-components";
import Test from "./components/Test";

const Father = styled.div`
  display: flex;
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

const Box = styled.div`
  background-color: ${(props) => props.wrapperColor};
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotateAnimation} 3s linear infinite;

  span {
    font-size: 40px;
    /* transition: all 1s ease-in; */
  }

  span:hover {
    font-size: 50px;
  }
`;

const Text = styled.span`
  color: white;
`;

const TestWrapper = styled(Test)`
  background-color: yellow;
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
        <span>🤪</span>
      </Box>
    </Father>
  );
}

export default App;
