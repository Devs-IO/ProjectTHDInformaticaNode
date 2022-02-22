import Providers from "../models/Providers";
import ProvidersRepository from "../repositories/ProvidersRepository";


interface request {
  name?:string,
  phone?: string,
  email?: string,
  contact_name: string
};

class CreateProvidersService {
  public async execute(data: request):Promise <Providers | undefined> {
    const providersRepository = new ProvidersRepository()
    const providers = await providersRepository.create(data)
    return providers;
  };
};

export default CreateProvidersService
