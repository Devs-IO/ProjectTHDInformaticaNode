import { Request, Response } from "express";
import CreateProvidersService from "../services/CreateProvidersServices";
import FindProvidersService from "../services/FindProviderService";

export default class ProvidersController {
  public async create(request: Request, response: Response): Promise<Response | void> {

    const {
      name,
      phone,
      email,
      contact_name
    } = request.body;

    const createProvidersService = new CreateProvidersService();

    const providers = await createProvidersService.execute({
      name,
      phone,
      email,
      contact_name
    });

    return response.status(201).json(providers);
  };

  public async find(_: Request, response: Response): Promise<Response | void> {
    const findProvidersService = new FindProvidersService;
    const providers = await findProvidersService.execute();
    return response.status(200).json(providers);
  };
};
