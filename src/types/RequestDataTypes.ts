export interface SignUpDataType {
  email: string;
  password: string;
  nickname?: string;
  name: string;
  birthdate: string;
  phoneNumber: string;
  gender: string;
}

export interface SignInDataType {
  email: string;
  password: string;
}

export interface ShippingAddressDataType {
  shippingAddressUuid?: string;
  addressName: string;
  recipientName: string;
  zipCode: string;
  baseAddress: string;
  detailAddress: string;
  phoneNumber: string;
  secondPhoneNumber: string;
  shippingNote?: string;
  defaulted: boolean;
}

export interface UserAgreementType {
  agreementId: number;
  agreed: boolean;
}
