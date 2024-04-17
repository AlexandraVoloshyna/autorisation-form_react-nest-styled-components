import styled from "styled-components";
export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledImgWrapper = styled.div`
  flex: 0 1 60%;
`;
export const StyledImg = styled.img`
  width: 100%;
  height: 100vh;
`;
export const StyledFormContainer = styled.div`
  max-width: 520px;
  margin-right: auto;
  padding: 300px 50px 0 0;
  flex-grow: 1;
`;
export const StyledContainerFluid = styled.div`
  max-width: 100%;
  display: flex;
  gap: 100px;
`;

export const StyledTitle = styled.h3`
  font-size: 28px;
  line-height: 34px;
  font-weight: 700;
  color: #172234;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;
export const StyledSpan = styled.span`
  font-family: Lato;
  color: #b29f7e;
  font-size: 18px;
  line-height: 22px;
`;

export const StyledFormText = styled.p`
  font-family: Lato;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  color: #172234;
  text-align:center;
  margin-top: 8px;
`;
