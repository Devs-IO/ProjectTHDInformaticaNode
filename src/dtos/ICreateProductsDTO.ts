export default interface ICreateProductsDTO {
  name: string,
  category_id: string,
  provider_id: string,
  sell_price: string,
  buy_price: string,
  description?: string,
  quantity: string,
  code?: string
};
