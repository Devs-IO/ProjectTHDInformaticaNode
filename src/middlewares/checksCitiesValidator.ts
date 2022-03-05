import * as Yup from "yup";

const requestSchema = Yup.object({
  name: Yup.string().required().max(200),
  uf: Yup.string().required().length(2),

});

export default requestSchema;
