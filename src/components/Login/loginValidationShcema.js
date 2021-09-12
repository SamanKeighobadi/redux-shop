import * as yup from "yup";

export const loginValidationShema = yup.object().shape({
  email: yup
    .string()
    .required("This Field is Required")
    .trim()
    .email("Email not Valid"),
  password: yup
    .string()
    .min(4, "least than 4 char")
    .max(125, "more than 125 char")
    .trim(),
});
