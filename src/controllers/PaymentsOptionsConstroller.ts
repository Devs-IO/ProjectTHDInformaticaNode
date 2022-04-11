import { Response, Request } from "express";
import FindPaymentOptionsService from "../services/FindPaymentOptionsService";
import CreatePaymentOptionsService from "../services/CreatePaymentOptionsService";


export default class PaymentsOptionsController {
  public async create(response: Response, request: Request): Promise<Response|void> {
    const { options } = request.body;

    const createPaymentOptionsService = new CreatePaymentOptionsService();

    const  paymentOption = await createPaymentOptionsService.execute({ options });

    return response.status(201).json(paymentOption)
  };

  public async find(response: Response): Promise<Response|void> {
    const findPaymentOptionsService = new FindPaymentOptionsService();

    const paymentOptions = await findPaymentOptionsService.execute();

    return response.status(201).json(paymentOptions);
  };
};
