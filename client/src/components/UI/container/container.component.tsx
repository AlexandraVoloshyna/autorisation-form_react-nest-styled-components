import { StyledContainer } from "./container.styled";

export const Container = ({ children }: React.PropsWithChildren) => {
  return <StyledContainer>{children}</StyledContainer>;
};