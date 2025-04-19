'use client';

import React, { createContext, useContext, useState } from 'react';

export type OrderItemPaymentPayload = {
  orderName: string;
  totalOriginPrice: number;
  totalPurchasePrice: number;
  method: string;
};

type OrderItemContextType = {
  paymentData: OrderItemPaymentPayload;
  setPaymentData: React.Dispatch<React.SetStateAction<OrderItemPaymentPayload>>;
};

const defaultPaymentData: OrderItemPaymentPayload = {
  orderName: '',
  totalOriginPrice: 0,
  totalPurchasePrice: 0,
  method: '',
};

const OrderItemContext = createContext<OrderItemContextType | undefined>(
  undefined
);

export const useOrderItemContext = (): OrderItemContextType => {
  const context = useContext(OrderItemContext);
  if (!context) {
    throw new Error(
      'useOrderItemContext must be used within an OrderItemContextProvider'
    );
  }
  return context;
};

export const OrderItemContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [paymentData, setPaymentData] =
    useState<OrderItemPaymentPayload>(defaultPaymentData);

  return (
    <OrderItemContext.Provider value={{ paymentData, setPaymentData }}>
      {children}
    </OrderItemContext.Provider>
  );
};
