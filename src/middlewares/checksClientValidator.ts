import * as Yup from "yup";

const requestSchema = Yup.object({

  name: Yup.string().required().max(200),
  phone: Yup.string().required().length(11),
  email: Yup.string().max(100).email(),
  cpf: Yup.string().length(11),
  city: Yup.string().max(100),
});

export default requestSchema;
