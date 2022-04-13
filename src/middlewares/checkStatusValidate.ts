import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";
import { NextFunction, Request, Response } from "express";


const CheckStatusValidate =
  (requestSchema: OptionalObjectSchema<ObjectShape>) =>
    async (request:Request, response:Response, next: NextFunction) => {
      const { paid } = request.body;

      try {
        await requestSchema.validate ({ paid });

        return next;
      } catch (error) {
        throw new Error();
      };
    };

export default CheckStatusValidate;
