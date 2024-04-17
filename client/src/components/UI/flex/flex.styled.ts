import styled from "styled-components"
import { Props } from "./flex.props"


export const StyledFlex = styled.div<Props>`
display:flex;
align-items: ${props=>props.align || "stretch"};
flex-direction:${props=>props.direction || "row"};
justify-content:${props=>props.justify || "stretch"};
margin:${props=>props.margin || "0px"};
padding:${props=>props.padding || "0px"};
gap:${props=>props.gap || "0px"};
`
