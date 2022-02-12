import ICreateProvidersDTO from "../../dtos/ICreateProvidersDTO";
import Providers from "../../models/Providers";


export default interface IProvidersRepository {
  create(dataProviders: ICreateProvidersDTO): Promise<Providers>;
  find(): Promise<Providers[]>;
};
