import { NextFunction, Request, Response } from "express";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";


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
      throw new Error("Providers validation error")
    }
  }

export default checkProvidersValidate
