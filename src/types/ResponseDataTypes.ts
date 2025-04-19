export interface CommonResponseType<T> {
  httpStatus: string;
  isSuccess: boolean;
  message: string;
  code: number;
  result: T;
}

export interface signInDataType {
  accessToken: string;
  refreshToken: string;
}

export interface BannerSlideImageType {
  id: number;
  imageUrl: string;
  description: string;
  defaulted?: boolean;
}

export interface ProductLabelType {
  isBest?: boolean;
  isNew?: boolean;
}

export interface ImageType {
  imageUrl: string;
  description: string;
}

// 리스트 상품
export interface ProductItemType {
  id: number;
  thumbnail: ImageType;
  label: ProductLabelType;
  name: string;
  price: number;
  salePrice?: number;
  discountRate: number;
}

// 상품 상세
export interface ProductDetailType {
  id: number;
  image: ImageType;
  label: ProductLabelType;
  name: string;
  description?: string;
  price: number;
  salePrice?: number;
  discountRate: number;
  detailDescription: string;
}

export interface EventCarouselType {
  eventId: number;
  title: string;
  products: ProductItemType[];
}

// 카테고리

export interface SubCategoryType {
  id: number;
  name: string;
  categoryId: number;
}

export interface ProductCategoryType {
  id: number;
  name: string;
  subCategory?: SubCategoryType[];
}

//메뉴 카테고리 타입
export interface CategoryMenuType {
  id: number;
  name: string;
  image: string;
  description: string;
}

export interface CategoryListType {
  thumbnail: string;
  categoryId: number;
  categoryName: string;
  description: string;
}

export interface FooterLinkItem {
  href: string;
  label: string;
}
export interface ShippingAddressListType {
  shippingAddressUuid: string;
  defaulted: boolean;
}
//배송지
export interface AddressType {
  shippingAddressUuid: string;
  addressName: string;
  recipientName: string;
  baseAddress: string;
  zipCode: string;
  detailAddress?: string;
  phoneNumber: string;
  secondPhoneNumber: string;
  shippingNote: string;
  defaulted?: boolean;
}

//장바구니상품
export interface CartProductType {
  userUuid: string;
  productName: string;
  productImageUrl: string;
  productPrice: number;
  discountPrice: number;
  discountRate: number;
  productQuantity: number;
  checked: boolean;
  productOptionListUuid: string;
}

export interface SeasonType {
  id: number;
  name: string;
}

export interface ProductSortOptionType {
  label: string;
  value: string;
}

export interface PolicyLinkType {
  href: string;
  label: string;
}

export enum AgreementTypeEnum {
  SIGN_UP = 'SIGN_UP',
  SHIPPING_ADDRESS = 'SHIPPING_ADDRESS',
}

export interface AgreementType {
  id: number;
  name: string;
  description: string;
  required: boolean;
  type: AgreementTypeEnum;
}

export interface OrderProductType {
  productName: string;
  productPrice: number;
  productQuantity: number;
  productOptionListUuid: string;
  productImageUrl: string;
  discountRate: number;
}

export interface usershippingAddressAgreementType {
  agreementId: number;
  agreed: boolean;
  userUuid: string;
  userAgreementUuid: string;
}

export interface shippingAddressAgreementType {
  id: number;
  name: string;
  description: string;
  required: boolean;
  type: AgreementTypeEnum;
}

export interface userInfoDataType {
  userUuid: string;
  email: string;
  nickname: string;
  name: string;
  phoneNumber: string;
  birthdate: string;
  gender: string;
}
