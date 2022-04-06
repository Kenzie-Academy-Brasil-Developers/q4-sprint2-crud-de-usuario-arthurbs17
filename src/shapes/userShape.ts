import * as yup from "yup";
import bcrypt from "bcrypt";

const userShape = yup.object().shape({
  name: yup.string().required("name is a required field"),
  email: yup
    .string()
    .email("invalid email")
    .required("email is a required field"),
  password: yup
    .string()
    .required("password is a required field")
    .transform((pwd) => bcrypt.hashSync(pwd, 10)),
  isAdm: yup.boolean(),
});

export default userShape;
