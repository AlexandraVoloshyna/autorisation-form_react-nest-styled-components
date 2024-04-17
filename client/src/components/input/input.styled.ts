import styled from "styled-components";
export const StyledInputWrapper = styled.div``;
export const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  color: black;
  font-size: 14px;
  line-height: 20px;
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 14px 20px 12px 20px;
  border-radius: 5px;
  border: 2px solid #e0e0e0;
  background: #e0e0e0;
  &::placeholder {
    color: rgb(23, 34, 52, 0.5);
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
`;
export const StyledError = styled.div`
  color: red;
  font-size: 24px;
  line-height: 20px;
`;
