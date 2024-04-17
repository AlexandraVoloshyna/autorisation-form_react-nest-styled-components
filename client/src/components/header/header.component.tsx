import { Container } from "../UI/container";
import { Flex } from "../UI/flex";
import { paths } from "../../router/path.const";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { clearCredentials } from "../../redux/auth.slice";
import { StyledHeader, StyledButton, StyledTitle} from "./header.styled";
import { toast } from "react-toastify";

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === paths.HOME;
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    try {
      dispatch(clearCredentials());
      toast.success("logout successfully done")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledHeader>
      <Container>
        {isHome && (
          <Flex align="center" justify="space-between" padding="18px 0px">
            <StyledTitle>My logo</StyledTitle>
            <Flex gap="10px">
              {token ? (
                <StyledButton type="button" onClick={logoutHandler}>
                  Log out
                </StyledButton>
              ) : (
                <>
                  <StyledButton outline="true" >
                    <Link to={paths.LOGIN}>Log in</Link>
                  </StyledButton>
                  <StyledButton>
                    <Link to={paths.REGISTER}>Sign up</Link>
                  </StyledButton>
                </>
              )}
            </Flex>
          </Flex>
        )}
      </Container>
    </StyledHeader>
  );
}

