import styled from "styled-components"



const Container = styled.div``;

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