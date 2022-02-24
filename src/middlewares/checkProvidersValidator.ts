import * as Yup from 'yup';

const requestSchema = Yup.object({
  name: Yup.string().max(200),
  phone: Yup.string().length(11),
  email: Yup.string().email().max(100),
  contact_name: Yup.string().required().max(200),
});

export default requestSchema;
