'use client';
import { oAuthSignUpAction, signUpAction } from '@/actions/auth';
import MultiStepSignUp from '@/components/pages/auth/signUp/MultiStepSignUp';
import {
  OAuthSignUpStoreStateType,
  SignUpStoreStateType,
} from '@/types/storeDataTypes';

export default function page() {
  // const handleSignUp = async (inputValues: OAuthSignUpStoreStateType) => {
  //   'use server';
  //   const { year, month, date, confirmPassword, ...rest } = inputValues;

  //   const formattedMonth = month.padStart(2, '0');
  //   const formattedDate = date.padStart(2, '0');
  //   const birthdate = `${year}-${formattedMonth}-${formattedDate}`;

  //   const payload = {
  //     ...rest,
  //     birthdate,
  //   };
  //   console.log(payload);

  //   const res = await oAuthSignUpAction(payload);
  //   console.log(res);

  //   if (res.success === false) {
  //     return { success: false, message: res.message };
  //   } else {
  //     return { success: true };
  //   }
  // };
  const onClickServer = async () => {
    const dummyData = {
      password: 'dummyPassword123!',
      name: '이름hkj1',
      nickname: 'dummyNick1',
      phoneNumber: '010-1666-5648',
      birthdate: '1990-01-01',
      gender: '남성',
    };
    const result = await oAuthSignUpAction(dummyData);
    console.log('회원가입 결과:', result);
  };

  return (
    <>
      {/* <MultiStepSignUp handleSignUp={handleSignUp} /> */}
      <button onClick={onClickServer}>서버</button>
    </>
  );
}
