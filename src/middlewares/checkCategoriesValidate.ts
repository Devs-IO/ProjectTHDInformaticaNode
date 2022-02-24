import { NextFunction, Request, Response } from "express";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";

const checkCategoriesValidate = (requestSchema: OptionalObjectSchema<ObjectShape>) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const { name } = request.body
    try {
      await requestSchema.validate({ name });
      return next();
    } catch (error) {
      throw new Error("Category validation error");
    }
  };

export default checkCategoriesValidate;
