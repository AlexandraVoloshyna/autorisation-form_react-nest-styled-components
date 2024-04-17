import styled from "styled-components";
import { ButtonProps } from "./header.props";
export const StyledHeader = styled.header`
  background-color: #172234;
  color: #fff;
  min-height: 84px;
`;

export const StyledTitle = styled.h3`
  font-size: 28px;
  line-height: 34px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  border-radius: 5px;
  background: #b29f7e;
  padding: 11px 58px;
  cursor: pointer;
  color: #fff;
  font-family: "Merriweather", serif;
  font-weight: 700;
  line-height: 22px;
  transition: scale, 0.3s ease-in;

  @media (hover: hover) {
    &:hover {
      scale: 1.1;
    }
  }
  ${(props) =>
    props.outline &&
    `border: 1px solid #B29F7E;
      color:#B29F7E;
      background: transparent;
    `}
@media (max-width: 500px) {
    padding: 11px 25px;
  }
`;
