export interface PaymentDataType {
  totalOriginPrice: number;
  totalPurchasePrice: number;
  orderName: string;
  method: string;
}

export interface PaymentReturnType {
  checkoutUrl: string;
  paymentUuid: string;
}
