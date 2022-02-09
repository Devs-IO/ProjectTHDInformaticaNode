import { Router, Request, Response } from 'express';
import clientsRouter from "./clients.routes";

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.status(200).json({
    uptime: process.uptime(),
    message: 'OK!',
  });
});

routes.use("/clients", clientsRouter);

export default routes;
