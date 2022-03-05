import { Request, Response } from "express";
import CreateClientsService from "../services/CreateClientsService";
import FindClientsService from "../services/FindClientsService";
import DeleteClientsService from "../services/DeleteClientsService";

export default class ClientsController {

  public async create(request: Request, response: Response): Promise<Response | void> {
    const { name, phone, email, cpf, city_id } = request.body;
    const createClientsService = new CreateClientsService();
    const clients = await createClientsService.execute({ name, phone, email, cpf, city_id });
    return response.status(201).json(clients);
  };

  public async find(_: Request, response: Response): Promise<Response | void> {
    const findClientsService = new FindClientsService();
    const clients = await findClientsService.execute();
    return response.status(200).json(clients);
  };

  public async delete(request: Request, response: Response): Promise<Response | void> {
    const { id } = request.params;
    const deleteClientsService = new DeleteClientsService();
    await deleteClientsService.execute(id);
    return response.status(204).json({ message: "successfully deleted" });
  };
};
