import * as Yup from "yup";

const requestSchema = Yup.object ({
  options: Yup.string().required().max(200),
});

export default requestSchema;
