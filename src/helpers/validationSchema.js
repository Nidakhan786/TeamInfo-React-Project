import * as Yup from "yup";

const formSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6),
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  emp_id: Yup.number().required(),
  role: Yup.string(),
});

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().min(6),
});

export { formSchema, loginSchema };
