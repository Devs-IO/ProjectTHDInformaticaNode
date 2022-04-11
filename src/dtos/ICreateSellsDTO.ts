export default interface ICreateSellsDTO {
  clients_id: string,
  status_id: string,
  paymentOptions_id: string,
  code?: string,
  discount?: number,
  total_value: number
};
