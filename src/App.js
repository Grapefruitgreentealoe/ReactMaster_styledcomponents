import styled, { keyframes } from "styled-components";

// const Father = styled.div`
//   display:flex;
// `

const Title = styled.h1`
  color:${props=>props.theme.textColor};
`

const Wrapper = styled.div`
  display: flex;
  height:100vh;
  width:100vw;
  justify-content:center;
  align-items:center;
  background-color:${props=>props.theme.backgroundColor};
`

function App() {
  return (
    <Wrapper>
      <Title>M</Title>
      
    </Wrapper>

  );
}

export default App;
