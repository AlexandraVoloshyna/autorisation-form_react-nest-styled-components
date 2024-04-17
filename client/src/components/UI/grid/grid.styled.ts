import styled from "styled-components"
import { Props } from "./grid.props"

export const StyledGrid = styled.div<Props>`
display:grid;
align-items: ${props=>props.align || "stretch"};
grid-template-columns:${props=>props.columns || "none"};
grid-template-rows:${props=>props.rows || "none"};
justify-items:${props=>props.justify || "stretch"};
margin:${props=>props.margin || "0px"};
padding:${props=>props.padding || "0px"};
gap:${props=>props.gap || "0px"};

@media (max-width: 991px) {
  grid-template-columns: ${props => props.columnsmobile  || "none"};
  grid-template-rows: ${props => props.rowsMobile || "none"};
}
`