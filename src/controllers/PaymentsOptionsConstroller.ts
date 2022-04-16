import { Request, Response } from "express";
import CreatePaymentOptionsService from "../services/CreatePaymentOptionsService";
import FindPaymentOptionsService from "../services/FindPaymentOptionsService";


export default class PaymentsOptionsController {
  public async create(request: Request, response: Response): Promise<Response | void> {
    const { options } = request.body;

    const createPaymentOptionsService = new CreatePaymentOptionsService();

    const paymentOption = await createPaymentOptionsService.execute({ options });

    return response.status(201).json(paymentOption)
  };

  public async find(response: Response): Promise<Response | void> {
    const findPaymentOptionsService = new FindPaymentOptionsService();

    const paymentOptions = await findPaymentOptionsService.execute();

    return response.status(201).json(paymentOptions);
  };
};
