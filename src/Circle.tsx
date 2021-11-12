import styled from "styled-components"

interface ContainerProps{
    bgColor: string;
}

const Container = styled.div<ContainerProps>`
    width:200px;
    height : 200px;
    background-color: ${(props) => props.bgColor};
    border-radius:100px; 
`;
//half the width 로 border-radius 를 지정하면 원이된다. 

interface CircleProps {
    bgColor: string;
}
// function Circle(props:CircleProps) {
//     return <Container bgColor={props.bgColor}></Container>
// }
function Circle({bgColor}:CircleProps) {
    return <Container bgColor={bgColor}></Container>
}



export default Circle;

//props를 interface로 정의해준다. object 가 어떻게 보이는지를 설명해준다.