import { useFormik, FormikHelpers, FormikValues } from "formik";
import * as Yup from "yup";
import { Input } from "../input";
import { StyledForm, StyledFormButton } from "./form.styled";

interface Props {
  initialValues: FormikValues;
  validationSchema?: Yup.Schema;
  fn: (values: FormikValues) => void;
  formType: string;
}

export function Form ({ initialValues, fn, validationSchema, formType }: Props) {
  const handleOnSubmit = (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    fn({ ...values });
    actions.resetForm();
  };
  const formik = useFormik<FormikValues>({
    initialValues,
    onSubmit: handleOnSubmit,
    validationSchema: validationSchema || Yup.object({}),
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Input
        name="email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        placeholder="Email"
        touched={formik.touched.email}
        error={formik.errors.email}
      />
      <Input
        name="password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        placeholder="Password"
        touched={formik.touched.password}
        error={formik.errors.password}
      />
      <StyledFormButton type="submit">
        {formType === "Login" ? "Sign in" : "Sign Up"}
      </StyledFormButton>
    </StyledForm>
  );
}
