import { Request, Response } from "express";
import CreateClientsService from "../services/CreateClientsService";
import FindClientsService from "../services/FindClientsService";

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
};
