import { Request, Response } from "express";
import CreateClientsService from "../services/CreateClientsService";
import DeleteClientsService from "../services/DeleteClientsService";
import FindByIdClientsService from "../services/FindByIdClientsService";
import FindClientsService from "../services/FindClientsService";
import UpdateClientsActiveService from "../services/UpdateClientsActiveService";
import UpdateClientsService from "../services/UpdateClientsService";

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

  public async findById(request: Request, response: Response): Promise<Response | void> {
    const { id } = request.params;
    const findByIdClientsService = new FindByIdClientsService();
    const clients = await findByIdClientsService.execute(id);
    return response.status(200).json(clients);
  };

  public async delete(request: Request, response: Response): Promise<Response | void> {
    const { id } = request.params;
    const deleteClientsService = new DeleteClientsService();
    await deleteClientsService.execute(id);
    return response.status(204).json({ message: "successfully deleted" });
  };

  public async update(request: Request, response: Response): Promise<Response | void> {
    const { id } = request.params;
    const { name, phone, email, cpf, city_id } = request.body;
    const updateClientsService = new UpdateClientsService();
    await updateClientsService.execute({ name, phone, email, cpf, city_id }, id);
    return response.status(204).json({ message: "successfully updated" });
  }

  public async updateActive(request: Request, response: Response): Promise<Response | void> {
    const { id } = request.params;
    const updateClientsActiveService = new UpdateClientsActiveService();
    await updateClientsActiveService.execute(id);
    return response.status(204).json({ message: "successfully updated" });
  }
};
