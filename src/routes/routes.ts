import { Request, Response, Router } from 'express';
import categoriesRouter from './categories.routes';
import citiesRouter from './cities.routes';
import clientsRouter from "./clients.routes";
import paymentsOptionsRouter from './paymentsOptions.routes';
import productsRouter from './products.routes';
import providerRouter from './providers.routes';
import sellsRouter from './sells.routes';
import statusRouter from './status.routes';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.status(200).json({
    date: new Date(),
    uptime: process.uptime(),
    message: 'OK!',
  });
});

routes.use("/clients", clientsRouter);
routes.use("/products", productsRouter);
routes.use("/categories", categoriesRouter);
routes.use("/providers", providerRouter);
routes.use("/cities", citiesRouter);
routes.use("/status", statusRouter);
routes.use("/payment", paymentsOptionsRouter);
routes.use("/sells", sellsRouter);

export default routes;
