import { Request, Response } from "express";
import FindProvidersService from "../services/FindProviderService";
import CreateProvidersService from "../services/CreateProvidersServices";

export default class ProvidersController {
  public async create(request: Request, response: Response) {

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

  public async find(response: Response):Promise<Response | undefined> {
    const findProvidersService = new FindProvidersService;

    const providers =  await findProvidersService.execute();

    return response.status(201).json(providers);
  };
};
