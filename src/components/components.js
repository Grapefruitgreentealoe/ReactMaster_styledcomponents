import styled, {keyframes} from "styled-components";

const rotationAnimation= keyframes`
    0% {
      transform : rotate(0deg);
      border-radius : 0px;
    }
    50%{
      border-radius:100px;
    }
    100%{
      transform : rotate(360deg);
      border-radius : 0px;
    }
`

const Emoji = styled.span`
  font-size : 36px;
`
const Box = styled.div`
  height: 200px;
  display:flex;
  width : 200px;
  justify-content:center;
  align-items:center;
  background-color : tomato;
  animation : ${rotationAnimation} 1s linear infinite; 
  ${Emoji}:hover{
      font-size:140px;
    }

  }    
  
  `

const Box2 = styled.div`
background-color:${(props) => props.bgColor};
width:100px;
height : 100px;

`
const Circle = styled(Box2)`
  border-radius:50px;

`

const Title = styled.h1`
  color:tomato;
  &:hover{
    color:teal;
  }
`

const Input = styled.input.attrs({ required: true, minLength: 10})`
  background-color: tomato;
`

const Wrapper = styled.div`
  display: flex;
  height:100vh;
  width:100vw;
  justify-content:center;
  align-items:center;
  ${Title}:hover{
    font-size:150px;
  }
`

const anim = keyframes`
  from{
    color : tomato;
  }
  to{
    color : teal;
  }
`
const Btn = styled.button`
  animation: ${anim} .5s infinite;
`

const Title2 = styled.h1`
  color:${props=>props.theme.textColor};
`

const Wrapper2 = styled.div`
  display: flex;
  height:100vh;
  width:100vw;
  justify-content:center;
  align-items:center;
  background-color:${props=>props.theme.backgroundColor};`