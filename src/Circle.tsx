import styled, { StyledInterface } from "styled-components"
import { useState } from 'react';

interface ContainerProps{
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width:200px;
    height : 200px;
    background-color: ${(props) => props.bgColor};
    border-radius:100px;
    border:1px solid ${(props)=>props.borderColor};
`;
//half the width 로 border-radius 를 지정하면 원이된다. 

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}
//물음표를 붙이면 필수 prop이 아니다.

// function Circle(props:CircleProps) {
//     return <Container bgColor={props.bgColor}></Container>
// }
function Circle({ bgColor, borderColor = bgColor, text = "default text" }: CircleProps) {
    const [counter, setCounter] = useState<number|string>(1)
    return <Container bgColor={bgColor} borderColor={borderColor}>
        {text} 
    </Container>
}



export default Circle;

//props를 interface로 정의해준다. object 가 어떻게 보이는지를 설명해준다.
//typescript는 useState의 initailValue를 통해 변수의 자료형을 유추한다.
//