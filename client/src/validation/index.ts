import * as Yup from "yup";

export const authValidation = Yup.object({
  email: Yup.string()
    .email({
      message: "Invalid email address",
      regex:
        /^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$/i
    })
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
});
