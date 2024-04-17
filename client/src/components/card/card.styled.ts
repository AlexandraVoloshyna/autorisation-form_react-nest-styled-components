import styled from "styled-components";
export const StyledCard = styled.div`
  max-width: 630px;
  max-height: 400px;
  position: relative;
`;

export const StyledCardDescription = styled.div`
  background: transparent;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
export const StyledCardImg = styled.img`
  max-width: 100%;
`;
export const StyledCardTitle = styled.h3`
  font-size: 28px;
  line-height: 34px;
  color: #b29f7e;
  font-weight: 700;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
export const StyledCardText = styled.p`
  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
`;
