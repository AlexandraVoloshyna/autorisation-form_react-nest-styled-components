import { FormikTouched, FormikErrors, FormikValues } from "formik";
import { StyledInputWrapper, StyledInput, StyledLabel, StyledError } from "./input.styled";
import { ReactNode } from "react";

interface IProps {
  name: string;
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  touched: boolean | FormikTouched<FormikValues> | FormikTouched<FormikValues>[] | undefined;
  error: string | string[] | FormikErrors<FormikValues> | FormikErrors<FormikValues>[] | undefined;
}

export const Input = ({ name, value, onChange, placeholder, touched, error, type }: IProps) => (
  <StyledInputWrapper>
    <StyledLabel htmlFor={name}>{name}</StyledLabel>
    <StyledInput
      id={name}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
    {touched && error ? <StyledError className="error">{error as ReactNode}</StyledError> : null}
  </StyledInputWrapper>
);