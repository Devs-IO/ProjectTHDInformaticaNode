import { NextFunction, Request, Response } from 'express';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';
import AppError from '../errors/AppError';

const CheckStatusValidate =
  (requestSchema: OptionalObjectSchema<ObjectShape>) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const { paid } = request.body;

    try {
      await requestSchema.validate({ paid });

      return next();
    } catch (error: any) {
      throw new AppError(error);
    }
  };

export default CheckStatusValidate;
