import * as yup from "yup";

const loginShape = yup.object().shape({
  email: yup
    .string()
    .email("invalid email")
    .required("email is a required field"),
  password: yup.string().required("password is a required field"),
});

export default loginShape;
