import { Request, Response } from "express";
import CreateCitiesService from "../services/CreateCitiesService";
import FindCitiesService from "../services/FindCitiesService";

export default class CitiesController {

  public async create(request: Request, response: Response) {

    const { name, uf } = request.body;

    const createCitiesService = new CreateCitiesService();

    const cities = await createCitiesService.execute({ name, uf });

    return response.status(201).json(cities);
  }

  public async find(request: Request, response: Response) {

    const findCitiesService = new FindCitiesService();

    const cities = await findCitiesService.execute();

    return response.status(200).json(cities);
  }
}
