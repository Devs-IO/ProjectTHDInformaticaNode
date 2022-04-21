import { NextFunction, Request, Response } from "express";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";
import AppError from "../errors/AppError";


const checkProvidersValidate = (requestSchema: OptionalObjectSchema<ObjectShape>) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const {
      name,
      phone,
      email,
      contact_name
    } = request.body
    try {
      await requestSchema.validate({
        name,
        phone,
        email,
        contact_name
      });
      return next();
    } catch (error) {
      throw new AppError("Providers validation error")
    }
  }

export default checkProvidersValidate
