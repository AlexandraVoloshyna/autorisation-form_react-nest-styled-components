import { Form } from "../../components/form";
import img from "../../assets/login-image.png";
import {
  StyledContainerFluid,
  StyledFormWrapper,
  StyledImg,
  StyledImgWrapper,
  StyledFormContainer,
  StyledTitle,
  StyledSpan,
  StyledFormText,
} from "../../components/shared";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../router/path.const";
import { useLoginMutation } from "../../redux/user-api.slice";
import { useAppDispatch } from "../../redux/hooks";
import { setCredentials } from "../../redux/auth.slice";
import { IUser } from "../../types";
import { toast } from "react-toastify";
import { authValidation } from "../../validation";
import { isErrorWithMessage, isFetchBaseQueryError } from "../../helpers";
export const LoginPage = () => {
  const [login, {isLoading}] = useLoginMutation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleLogin = async (values: IUser) => {
    try {
      const res = await login({ ...values}).unwrap();
      toast.success(res?.message)
      dispatch(setCredentials(res?.data));
      navigate(paths.HOME);
    } catch (err) {
      if (isFetchBaseQueryError(err)) {
        const errMsg = "error" in err ? err.error : JSON.stringify(err.data)
        toast.error(errMsg)
      } else if (isErrorWithMessage(err)) {
        toast.error(err.message)
      }
    }
  }
  return (
    <section>
      <StyledContainerFluid>
        <StyledImgWrapper>
          <StyledImg src={img} />
        </StyledImgWrapper>
        <StyledFormContainer>
          <StyledFormWrapper>
            <StyledTitle>Login</StyledTitle>
            <Form
              formType="Login"
              initialValues={{ email: "", password: "" }}
              fn={(values) => handleLogin(values as IUser)}
              validationSchema={authValidation}
            />
            <StyledFormText>
              {
                isLoading ? <>Loading...</> : <>Don`t have account ?
                  <StyledSpan>
                    <Link to={paths.REGISTER}>Sign up</Link>
                  </StyledSpan></>
              }
            </StyledFormText>
          </StyledFormWrapper>
        </StyledFormContainer>
      </StyledContainerFluid>
    </section>
  );
}


