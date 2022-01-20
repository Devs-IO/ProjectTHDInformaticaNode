import * as Yup from "yup";

const requestSchema = Yup.object({

  name: Yup.string().required().max(200),
  phone: Yup.string().required().length(10),
  email: Yup.string().required().max(100).email(),
  cpf: Yup.string().required().length(11),
  city: Yup.string().required().max(100),

});

export default requestSchema;
