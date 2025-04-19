'use client';

import { useSearchParams } from 'next/navigation';

export default function PaymentSuccessPage() {
  const params = useSearchParams();

  const paymentKey = params.get('paymentKey');
  const orderId = params.get('orderId');
  const amount = params.get('amount');

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🎉 결제 성공</h2>
      <p>
        <strong>paymentKey:</strong> {paymentKey}
      </p>
      <p>
        <strong>orderId:</strong> {orderId}
      </p>
      <p>
        <strong>amount:</strong> {amount}
      </p>
    </div>
  );
}
