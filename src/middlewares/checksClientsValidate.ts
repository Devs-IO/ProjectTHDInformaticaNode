import { NextFunction, Request, Response } from "express";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";
import AppError from "../errors/AppError";

const checksClientsValidate =
  (requestSchema: OptionalObjectSchema<ObjectShape>) =>
    async (request: Request, response: Response, next: NextFunction) => {

      const { name, phone, email, cpf, city_id } = request.body;

      try {
        await requestSchema.validate({
          name, phone, email, cpf, city_id
        });

        return next();
      } catch (error) {
        throw new AppError("Clients validation error.");
      }
    }

export default checksClientsValidate;
