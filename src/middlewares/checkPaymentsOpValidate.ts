import { NextFunction, Request, Response } from 'express';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';
import AppError from '../errors/AppError';

const CheckPaymentOpValidate =
  (requestSchema: OptionalObjectSchema<ObjectShape>) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const { options } = request.body;

    try {
      await requestSchema.validate({ options });

      return next();
    } catch (error: any) {
      throw new AppError(error);
    }
  };

export default CheckPaymentOpValidate;
