import { ObjectShape, OptionalObjectSchema } from "yup/lib/object"
import { Response, Request, NextFunction } from "express"


const checkProviderValidate = (requestSchema: OptionalObjectSchema<ObjectShape>) =>
  async (request:Request, response:Response, next:NextFunction) => {
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
      throw new Error("Erro na validação do fornecedor")
    }
  }

export default checkProviderValidate
