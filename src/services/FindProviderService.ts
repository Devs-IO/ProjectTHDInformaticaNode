import Providers from "../models/Providers";
import ProvidersRepository from "../repositories/ProviderRepository";


class FindProvidersService {
  public async execute(): Promise<Providers[]> {

    const providersRepository = new ProvidersRepository();

    let providers = await providersRepository.find();

    return providers;
  };
};

export default FindProvidersService;
