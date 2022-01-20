import { Router } from "express";
import clientsRouter from "./clients.routes";

const routes = Router();

routes.use("/clients", clientsRouter);

export default routes;
