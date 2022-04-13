import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";
import { NextFunction, Request, Response } from "express";


const CheckPaymentOpValidate =
  (requestSchema: OptionalObjectSchema<ObjectShape>) =>
    async (request:Request, response:Response, next: NextFunction) => {
      const { options } = request.body;

      try {
        await requestSchema.validate ({ options });

        return next;
      } catch (error) {
        throw new Error();
      };
    };

export default CheckPaymentOpValidate;
