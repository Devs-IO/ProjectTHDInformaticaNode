import * as Yup from "yup";


const requestSchema = Yup.object ({
  clients_id: Yup.string().required(),
  status_id: Yup.string().required(),
  paymentOptions_id: Yup.string().required(),
  code: Yup.string().required(),
  discount: Yup.number(),
  total_value: Yup.number(),
});

export default requestSchema;
