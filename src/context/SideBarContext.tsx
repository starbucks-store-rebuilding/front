'use client';
import React, { createContext, useContext, useState } from 'react';

interface ModalContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextType>(
  {} as ModalContextType
);
export const useModalContext = () => useContext(ModalContext);

export function ModalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const value = {
    isOpen,
    setIsOpen,
    isSearchOpen,
    setIsSearchOpen,
  };
  return (
    <ModalContext.Provider {...{ value }}>{children}</ModalContext.Provider>
  );
}
