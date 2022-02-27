import "./App.css";
import styled from "styled-components";
import Test from "./components/Test";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.wrapperColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

const TestWrapper = styled(Test)`
  background-color: yellow;
`;

function App() {
  return (
    <Father style={{ display: "flex" }}>
      <Box wrapperColor="red">
        <Text>test</Text>
      </Box>
      <Box wrapperColor="teal" />
      <TestWrapper />
    </Father>
  );
}

export default App;
