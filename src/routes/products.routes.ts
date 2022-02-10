import { Router, Request, Response } from "express";

const productsRouter = Router();

productsRouter.get('/', (request: Request, response: Response) => {
  return response.status(200).json({
    message: 'Products',
  });
});

export default productsRouter;
