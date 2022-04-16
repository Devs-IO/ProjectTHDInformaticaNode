import { Request, Response } from "express";
import CreateStatusService from "../services/CreateStatusSevice";
import FindStatusService from "../services/FindStatusService";


export default class StatusController {
  public async create(request: Request, response: Response): Promise<Response | void> {
    const { paid } = request.body;
    const createStatusService = new CreateStatusService();
    const status = await createStatusService.execute({ paid });
    return response.status(201).json(status);
  };

  public async find(_: Request, response: Response): Promise<Response | void> {
    const findStatusService = new FindStatusService();
    const status = await findStatusService.execute();
    return response.status(200).json(status);
  };
};
