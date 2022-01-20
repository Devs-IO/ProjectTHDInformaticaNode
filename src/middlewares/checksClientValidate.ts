import { Request, Response, NextFunction } from "express";
import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";

const checksUserValidate =
  (requestSchema: OptionalObjectSchema<ObjectShape>) =>
    async (request: Request, response: Response, next: NextFunction) => {

      const { name, phone, email, cpf, city } = request.body;
      console.log(request.body);
      try {
        await requestSchema.validate({
          name, phone, email, cpf, city
        });
        console.log("cheguei aqui");

        return next();
      } catch (error) {
        console.log("cheguei aqui antes do erro", error);
        throw new Error();
      }
    }

export default checksUserValidate;
