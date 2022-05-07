import { Request, Response } from "express";
import FindSellsByIdService from "services/FindSellsByIdService";
import CreateSellsService from "../services/CreateSellsService";
import DeleteSellsService from "../services/DeleteSellsService";
import FindSellsByClientIdService from "../services/FindSellsByClientIdService";
import FindSellsService from "../services/FindSellsService";
import UpdateSellsService from "../services/UpdateSellsService";


export default class SellsController {
  public async create(request: Request, response: Response): Promise<Response | void> {
    const {
      clients_id,
      status_id,
      payment_options_id,
      code,
      discount,
      total_value,
      products,
      installments
    } = request.body;

    const createSellsService = new CreateSellsService();

    const answer = await createSellsService.execute({
      sells: {
        clients_id,
        status_id,
        payment_options_id,
        code,
        discount,
        total_value
      },
      products,
      installments
    });

    return response.status(201).json(answer);
  };

  public async find(_: Request, response: Response): Promise<Response | void> {
    const findSellsService = new FindSellsService();
    const sells = await findSellsService.execute();
    return response.status(200).json(sells);
  };

  public async findByClientId(request: Request, response: Response): Promise<Response | void> {
    const { id } = request.params;
    const findSellsByClientId = new FindSellsByClientIdService();
    const sells = await findSellsByClientId.execute(id);
    return response.status(200).json(sells);
  };

  public async deleteById(request: Request, response: Response): Promise<Response | void> {
    const { id } = request.params;
    const deleteSellsService = new DeleteSellsService();
    await deleteSellsService.execute(id);
    return response.status(204).json({ message: "successfully deleted" });
  };

  public async updateById(request: Request, response: Response): Promise<Response | void> {
    const { id } = request.params;

    const {
      clients_id,
      status_id,
      payment_options_id,
      code,
      discount,
      total_value
    } = request.body;

    const updateSellsService = new UpdateSellsService();

    await updateSellsService.execute({
      clients_id,
      status_id,
      payment_options_id,
      code,
      discount,
      total_value,
    }, id);

    return response.status(204).json({ message: "successfully updated" });
  };

  public async findById(request: Request, response: Response): Promise<Response | void> {
    const { id } = request.params;
    const findSellsByIdService = new FindSellsByIdService();
    const sells = findSellsByIdService.execute(id);
    return response.status(200).json(sells);
  }
};
