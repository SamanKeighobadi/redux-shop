import * as yup from "yup";

export const registerValidationShema = yup.object().shape({
  fullname: yup
    .string("Fullname format is not valid")
    .required("This Field is required")
    .min(3, "least than 3 char")
    .max(125, "more than 125 char")
    .trim(),
  email: yup
    .string()
    .email("Email not Valid")
    .required("This Feild is required")
    .trim(),
  password: yup
    .string()
    .required("This Field is required")
    .min(4, "least than 4 char")
    .max(125, "more than 125")
    .trim(),
});
