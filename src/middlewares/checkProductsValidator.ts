import * as Yup from 'yup';

const requestSchema = Yup.object({

    name: Yup.string().required().max(200),
    category_id: Yup.string().required(),
    provider_id: Yup.string().required(),
    sell_price: Yup.string().required(),
    buy_price: Yup.string().required(),
    description: Yup.string().max(500),
    quantity: Yup.number().required(),
    code: Yup.string()

});

export default requestSchema;
