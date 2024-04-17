import { StyledWrapper } from "./wrapper.styled";

export const Wrapper = ({ children }: React.PropsWithChildren) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};