import ICreateProvidersDTO from '../dtos/ICreateProvidersDTO';
import Providers from "../models/Providers";
import ProvidersRepository from "../repositories/ProvidersRepository";

class CreateProvidersService {
  public async execute(data: ICreateProvidersDTO): Promise<Providers | undefined> {
    const providersRepository = new ProvidersRepository()
    const providers = await providersRepository.create(data)
    return providers;
  };
};

export default CreateProvidersService;
