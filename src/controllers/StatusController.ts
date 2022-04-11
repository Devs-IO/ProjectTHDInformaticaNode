import { Response, Request } from "express";
import FindStatusService from "../services/FindStatusService";
import CreateStatusService from "../services/CreateStatusSevice";


export default class StatusController {
  public async create(response:Response,request:Request):Promise<Response|void> {
    const { paid } = request.body;

    const createStatusService = new CreateStatusService();

    const status = await createStatusService.execute({ paid });

    return response.status(201).json(status);
  };

  public async find(response:Response):Promise <Response|void> {
    const findstatusService = new FindStatusService();

    const status = await findstatusService.execute();

    return response.status(201).json(status);
  };
};
