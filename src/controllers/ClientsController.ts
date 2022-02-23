import { Request, Response } from "express";
import FindClientsService from "../services/FindClientsService";
import CreateClientsService from "../services/CreateClientsService";

export default class ClientsController {

  public async create(request: Request, response: Response) {

    const { id, name, phone, email, cpf, city } = request.body;

    const createClientsService = new CreateClientsService();

    const clients = await createClientsService.execute({ name, phone, email, cpf, city });

    return response.status(201).json(clients);
  };

  public async find(response: Response):Promise<Response | undefined> {

    const findClientsService = new FindClientsService();

    const clients = await findClientsService.execute();

    return response.status(200).json(clients);
  };
};
