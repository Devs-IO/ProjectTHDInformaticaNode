import * as Yup from "yup";

const requestSchema = Yup.object({

  name: Yup.string().required().max(200),
  phone: Yup.string().required().length(15),
  email: Yup.string().max(100).email(),
  cpf: Yup.string().length(14),
  city_id: Yup.string().max(100),
});

export default requestSchema;
