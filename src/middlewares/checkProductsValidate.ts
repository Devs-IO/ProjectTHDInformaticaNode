import { NextFunction, Request, Response } from 'express';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';
import AppError from '../errors/AppError';

const checkProductValidate =
  (requestSchema: OptionalObjectSchema<ObjectShape>) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const {
      name,
      category_id,
      provider_id,
      sell_price,
      buy_price,
      description,
      quantity,
      code,
    } = request.body;

    try {
      await requestSchema.validate({
        name,
        category_id,
        provider_id,
        sell_price,
        buy_price,
        description,
        quantity,
        code,
      });

      return next();
    } catch (error: any) {
      throw new AppError(error);
    }
  };

export default checkProductValidate;
