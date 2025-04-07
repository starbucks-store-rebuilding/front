'use server';
import { SignUpDataType } from '@/types/RequestDataTypes';
import { AgreementType } from '@/types/ResponseDataTypes';

export async function signUpAction(signUpData: Partial<SignUpDataType>) {
  const payload: Partial<SignUpDataType> = { ...signUpData };

  console.log('Payload being sent to the API:', payload);
  const response = await fetch(
    `${process.env.BASE_API_URL}/api/v1/auth/sign-up`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error('Sign-up failed:', errorData);
    throw new Error(errorData.message);
  }

  return await response.json();
}

export async function getSignUpAgreementData(): Promise<AgreementType[]> {
  const response = await fetch(
    `${process.env.BASE_API_URL}/api/v1/agreement/sign-up`,
    {
      method: 'GET',
      cache: 'no-cache',
    }
  );
  if (!response.ok) {
    const errorData = await response.json();
    console.error('Failed to fetch sign up agreement data:', errorData);
    throw new Error(errorData.message);
  }

  const data = await response.json();
  return data.result as AgreementType[];
}

export async function sendEmailVerificationAction({
  email,
}: {
  email: string;
}) {
  const payload = {
    email,
  };

  const response = await fetch(
    `${process.env.BASE_API_URL}/api/v1/email/send-code`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error('이메일 인증 코드 전송 실패: ', errorData);
    throw new Error(errorData.message);
  }

  return await response.json();
}

export async function verifyEmailCodeAction({
  email,
  verificationCode,
}: {
  email: string;
  verificationCode: string;
}) {
  const payload = {
    email,
    verificationCode,
  };

  const response = await fetch(
    `${process.env.BASE_API_URL}/api/v1/email/verify`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    console.error('이메일 인증 실패: ', errorData);
    throw new Error(errorData.message);
  }

  return await response.json();
}
