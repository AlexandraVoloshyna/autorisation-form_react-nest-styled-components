import { Props } from "./flex.props";
import { StyledFlex } from "./flex.styled";

export const Flex = ({ children, ...props}: React.PropsWithChildren<Props>) => {
  return <StyledFlex {...props}>{children}</StyledFlex>;
};