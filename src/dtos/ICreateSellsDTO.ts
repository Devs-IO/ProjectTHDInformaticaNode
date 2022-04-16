export default interface ICreateSellsDTO {
  clients_id: string,
  status_id: string,
  payment_options_id: string,
  code?: string,
  discount?: number,
  total_value: string,
};
