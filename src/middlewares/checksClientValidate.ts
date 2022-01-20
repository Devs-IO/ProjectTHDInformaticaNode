import { Request, Response, NextFunction } from "express";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";

const checksUserValidate =
  (requestSchema: OptionalObjectSchema<ObjectShape>) =>
    async (request: Request, response: Response, next: NextFunction) => {

      const { name, phone, email, cpf, city } = request.body;

      try {
        await requestSchema.validate({
          name, phone, email, cpf, city
        });

        return next();
      } catch (error) {
        throw new Error();
      }
    }

export default checksUserValidate;
