import { ObjectShape, OptionalObjectSchema } from "yup/lib/object";
import { Request, Response, NextFunction } from "express";


const checkCategoryValidate = (requestSchhema: OptionalObjectSchema<ObjectShape>) =>
  async (request:Request, response:Response, next:NextFunction) => {
    const { name } = request.body
    try {
      await requestSchhema.validate({ name });
      return next();
    } catch (error) {
      throw new Error("Erro na validação da Categoria")
    }
  };

export default checkCategoryValidate;
