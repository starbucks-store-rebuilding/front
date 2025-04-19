'use client';

import { useSearchParams } from 'next/navigation';

export default function PaymentFailPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const message = searchParams.get('message');

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold text-red-500">❌ 결제 실패</h1>
      <p className="mt-4">사유: {message ?? '알 수 없는 오류'}</p>
      <p className="text-sm text-gray-500">오류 코드: {code}</p>
    </div>
  );
}
