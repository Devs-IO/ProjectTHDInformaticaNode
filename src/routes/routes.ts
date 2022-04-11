import { Request, Response, Router } from 'express';
import categoriesRouter from './categories.routes';
import citiesRouter from './cities.routes';
import clientsRouter from "./clients.routes";
import productsRouter from './products.routes';
import providerRouter from './providers.routes';
import sellsRouter from './sells.routes';
import statusRoute from './status.routes';

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
routes.use("/providers", providerRouter);
routes.use("/cities", citiesRouter);
routes.use("/status", statusRoute);
routes.use("/sells", sellsRouter);

export default routes;
