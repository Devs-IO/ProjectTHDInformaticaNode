import { Router, Request, Response } from 'express';
import categoriesRouter from './categories.routes';
import clientsRouter from "./clients.routes";
import productsRouter from './products.routes';
import providerRouter from './providers.routes';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.status(200).json({
    uptime: process.uptime(),
    message: 'OK!',
  });
});

routes.use("/clients", clientsRouter);
routes.use("/products", productsRouter);
routes.use("/categories", categoriesRouter);
routes.use("/providers", providerRouter)

export default routes;
