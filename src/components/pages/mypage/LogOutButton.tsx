'use client';
import { LogoutAction } from '@/actions/auth';
import { signOut } from 'next-auth/react';

export default function LogOutButton() {
  const handleLogout = async () => {
    try {
      await LogoutAction();
      await signOut({ redirect: true, callbackUrl: '/' });
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };
  return (
    <button type="button" onClick={handleLogout} className="cursor-pointer">
      로그아웃
    </button>
  );
}
