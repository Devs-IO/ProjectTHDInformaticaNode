import { Request, Response } from "express";
import FindSellsByClientIdService from "../services/FindSellsByClientIdService";
import FindSellsService from "../services/FindSellsService";
import CreateSellsService from "../services/CreateSellsService";
import DeleteSellsService from "../services/DeleteSellsService";
import UpdateSellsService from "../services/UpdateSellsService";


export default class SellsController {
  public async create(response:Response, request:Request): Promise<Response|void> {
    const {
      clients_id,
      status_id,
      paymentOptions_id,
      code,
      discount,
      total_value
    } = request.body;

    const createSellsService = new CreateSellsService();

    const sells = await createSellsService.execute({
      clients_id,
      status_id,
      paymentOptions_id,
      code,
      discount,
      total_value
    });

    return response.status(201).json(sells);
  };

  public async find(_: Request,response:Response): Promise<Response|void> {
    const findSellsService = new FindSellsService();
    const sells = await findSellsService.execute();
    return response.status(201).json(sells);
  };

  public async findByClientId(request:Request, response:Response): Promise<Response|void> {
    const { client_id } = request.params;

    const findSellsByClientId = new FindSellsByClientIdService();

    const sells = await findSellsByClientId.execute(client_id);

    return response.status(201).json(sells);
  };

  public async deleteById(request:Request, response:Response): Promise<Response|void> {
    const { id } = request.params;

    const deleteSellsService = new DeleteSellsService();

    await deleteSellsService.execute(id);

    return response.status(204).json({ message: "successfully deleted" });
  };

  public async updateById(request:Request, response:Response): Promise<Response|void> {
    const { id } = request.params;

    const {
      clients_id,
      status_id,
      paymentOptions_id,
      code,
      discount,
      total_value
    } = request.body;

    const updateSellsService = new UpdateSellsService();

    await updateSellsService.execute({
      clients_id,
      status_id,
      paymentOptions_id,
      code,
      discount,
      total_value,
    }, id);

    return response.status(204).json({ message: "successfully updated" });
  };
};
