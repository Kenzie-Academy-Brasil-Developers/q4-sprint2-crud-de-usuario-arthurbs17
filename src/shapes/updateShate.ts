import * as yup from "yup";

const updateShape = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("invalid email"),
  updatedOn: yup.date().default(() => new Date()),
});

export default updateShape;
