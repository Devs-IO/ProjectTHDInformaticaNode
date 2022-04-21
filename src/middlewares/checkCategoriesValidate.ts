import { NextFunction, Request, Response } from "express";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";
import AppError from "../errors/AppError";

const checkCategoriesValidate = (requestSchema: OptionalObjectSchema<ObjectShape>) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const { name } = request.body
    try {
      await requestSchema.validate({ name });
      return next();
    } catch (error) {
      throw new AppError("Category validation error.");
    }
  };

export default checkCategoriesValidate;
