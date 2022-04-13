import * as Yup from "yup";

const requestSchema = Yup.object ({
  paid: Yup.string().required().max(50),
});

export default requestSchema;
