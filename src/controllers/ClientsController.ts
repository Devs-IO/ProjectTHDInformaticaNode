import { Request, Response } from "express";
import CreateClientsService from "../services/CreateClientsService";

export default class ClientsController {

  public async create(request: Request, response: Response) {

    const { id, name, phone, email, cpf, city } = request.body;

    const createClientsService = new CreateClientsService();

    const clients = createClientsService.execute({ name, phone, email, cpf, city });

    return response.status(201).json();
  }
}
