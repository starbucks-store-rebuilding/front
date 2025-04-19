'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { OAuthSignUpDataType, SignUpDataType } from '@/types/RequestDataTypes';
import { AgreementType, userInfoDataType } from '@/types/ResponseDataTypes';
import { getServerSession } from 'next-auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signUpAction(signUpData: Partial<SignUpDataType>) {
  const payload: Partial<SignUpDataType> = { ...signUpData };

  try {
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
      // console.error('Sign-up failed:', errorData);
      // throw new Error(errorData.message);
      return { success: false, message: errorData.message };
    }

    return await response.json();
  } catch (error) {
    return { success: false, message: '알 수 없는 오류가 발생했습니다.' };
  }
}

export async function oAuthSignUpAction(
  signUpData: Partial<OAuthSignUpDataType>
) {
  const payload: Partial<OAuthSignUpDataType> = { ...signUpData };
  const cookieStore = cookies();
  const oauthCookie = (await cookieStore).get('oauth_cookie')?.value;
  if (!oauthCookie)
    return {
      success: false,
      message: '유저 인증 쿠키 값이 존재하지 않습니다.',
    };
  try {
    console.log('Payload being sent to the API:', payload);
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/v1/oauth/sign-up`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `oauth_cookie=${oauthCookie}`,
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Sign-up failed:', errorData);
      return { success: false, message: errorData.message };
    }

    return await response.json();
  } catch (error) {
    return { success: false, message: '알 수 없는 오류가 발생했습니다.' };
  }
}

export async function LogoutAction() {
  try {
    const session = await getServerSession(options);
    const refreshToken = session?.user.refreshToken;

    const response = await fetch(
      `${process.env.BASE_API_URL}/api/v1/auth/logout`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${refreshToken}`,
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Logout failed:', errorData);
      // throw new Error(errorData.message);
      return { success: false, message: errorData.message };
    }

    return await response.json();
  } catch (error) {
    return { success: false, message: '알 수 없는 오류가 발생했습니다.' };
  }
}

export async function getSignUpAgreementData() {
  try {
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/v1/agreement/sign-up`,
      {
        method: 'GET',
        cache: 'no-cache',
      }
    );
    if (!response.ok) {
      // const errorData = await response.json();
      // console.error('Failed to fetch sign up agreement data:', errorData);
      // throw new Error(errorData.message);
      redirect('/error');
    }

    const data = await response.json();
    return {
      success: true,
      data: data.result as AgreementType[],
    };
  } catch (error) {
    redirect('/error');
  }
}

export async function checkEmailDuplicate({ email }: { email: string }) {
  const payload = {
    email,
  };

  try {
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/v1/auth/exists/email`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      // console.error('이메일 중복 검사 실패: ', errorData);
      // throw new Error(errorData.message);
      return { success: false, message: errorData.message };
    }

    return await response.json();
  } catch (error) {
    return { success: false, message: '알 수 없는 오류가 발생했습니다.' };
  }
}

export async function sendEmailVerificationAction({
  email,
  purpose,
}: {
  email: string;
  purpose: string;
}) {
  const payload = {
    email,
    purpose: purpose,
  };

  try {
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
      // throw new Error(errorData.message);
      return { success: false, message: errorData.message };
    }

    return await response.json();
  } catch (error) {
    return { success: false, message: '알 수 없는 오류가 발생했습니다.' };
  }
}

export async function verifyEmailCodeAction({
  email,
  verificationCode,
  purpose,
}: {
  email: string;
  verificationCode: string;
  purpose: string;
}) {
  const payload = {
    email,
    verificationCode,
    purpose: purpose,
  };

  try {
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
      // throw new Error(errorData.message);
      return { success: false, message: errorData.message };
    }

    return await response.json();
  } catch (error) {
    return { success: false, message: '알 수 없는 오류가 발생했습니다.' };
  }
}

export async function getUserInfoData() {
  try {
    const session = await getServerSession(options);
    const response = await fetch(`${process.env.BASE_API_URL}/api/v1/user`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${session?.user.accessToken}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    });
    if (!response.ok) {
      // const errorData = await response.json();
      // console.error('Failed to fetch sign up agreement data:', errorData);
      // throw new Error(errorData.message);
      redirect('/error');
    }

    const data = await response.json();
    return {
      success: true,
      data: data.result as userInfoDataType,
    };
  } catch (error) {
    redirect('/error');
  }
}

export async function resetUserPasswordAction({
  email,
  newPassword,
  confirmPassword,
}: {
  email: string;
  newPassword: string;
  confirmPassword: string;
}) {
  const payload = {
    email,
    newPassword,
    confirmPassword,
  };
  console.log(payload);

  try {
    const response = await fetch(
      `${process.env.BASE_API_URL}/api/v1/user/password/reset`,
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
      console.error('비밀번호 변경 실패: ', errorData);
      // throw new Error(errorData.message);
      return { success: false, message: errorData.message };
    }

    const data = await response.json();

    return { success: true, data: data };
  } catch (error) {
    return { success: false, message: '알 수 없는 오류가 발생했습니다.' };
  }
}
