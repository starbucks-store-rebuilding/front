export interface SignUpStoreStateType {
  emailId: string;
  emailDomain: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  name: string;
  year: string;
  month: string;
  date: string;
  phoneNumber: string;
  gender: string;
  emailVerificationCode: string;
  isEmailVerified: string;
  isEmailSent: string;
  isOptionalConsentChecked: string;
}

export interface SignInStoreStateType {
  email: string;
  password: string;
}
