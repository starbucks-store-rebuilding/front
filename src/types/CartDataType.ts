export interface CartItemType {
  userUuid: string;
  cartUuid: string;
  productQuantity: number;
  checked: boolean;
  productUuid: string;
  productOptionUuid: string;
}

export interface CartProductItemType {
  productUuid: string;
  name: string;
}

export interface CartItemPriceData {
  productPrice: number;
  productSalePrice: number;
}

export interface AddCartItemDataType {
  productQuantity: number;
  checked: boolean;
  productUuid: string;
  productOptionUuid: string;
}
