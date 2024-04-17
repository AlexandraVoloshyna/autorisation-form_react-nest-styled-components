import { Props } from "./grid.props";
import { StyledGrid} from "./grid.styled";

export const Grid = ({ children, ...props}: React.PropsWithChildren<Props>) => {
  return <StyledGrid {...props}>{children}</StyledGrid>;
};