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
import { useRegistrationMutation } from "../../redux/user-api.slice";
import { IUser } from "../../types";
import { toast } from "react-toastify";
import { authValidation } from "../../validation";
import { isErrorWithMessage, isFetchBaseQueryError } from "../../helpers";
export const RegistrationPage = () => {
  const [register] = useRegistrationMutation()
  const navigate = useNavigate()
  const handleRegistration = async (values: IUser) => {
    try {
      const res = await register({ ...values}).unwrap();
      toast.success(res?.message)
      navigate(paths.LOGIN);
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
            <StyledTitle>Registration</StyledTitle>
            <Form
              formType="Registration"
              initialValues={{ email: "", password: "" }}
              fn={(values) => handleRegistration(values as IUser)}
              validationSchema={authValidation}
            />
            <StyledFormText>
              Already have an  account?
              <StyledSpan>
                <Link to={paths.LOGIN}>Sign in</Link>
              </StyledSpan>
            </StyledFormText>
          </StyledFormWrapper>
        </StyledFormContainer>
      </StyledContainerFluid>
    </section>
  );
}
