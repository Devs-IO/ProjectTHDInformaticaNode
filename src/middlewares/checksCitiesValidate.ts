import { NextFunction, Request, Response } from 'express';
import { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';
import AppError from '../errors/AppError';

const checksCitiesValidate =
  (requestSchema: OptionalObjectSchema<ObjectShape>) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const { name, uf } = request.body;

    try {
      await requestSchema.validate({
        name,
        uf,
      });

      return next();
    } catch (error: any) {
      throw new AppError(error);
    }
  };

export default checksCitiesValidate;
