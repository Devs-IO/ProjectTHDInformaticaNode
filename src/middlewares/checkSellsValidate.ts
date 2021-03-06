import { NextFunction, Request, Response } from 'express';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';
import AppError from '../errors/AppError';

const CheckSellsValidate =
  (requestSchema: OptionalObjectSchema<ObjectShape>) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const {
      clients_id,
      status_id,
      payment_options_id,
      code,
      discount,
      total_value,
    } = request.body;

    try {
      await requestSchema.validate({
        clients_id,
        status_id,
        payment_options_id,
        code,
        discount,
        total_value,
      });

      return next;
    } catch (error: any) {
      throw new AppError(error);
    }
  };

export default CheckSellsValidate;
