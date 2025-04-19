import { cn } from '@/lib/utils';
import React from 'react';

function SectionInnerPadding({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <section className={cn('px-6', className)}>{children}</section>;
}

function SectionNoPadding({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <section className={cn('px-0 py-0', className)}>{children}</section>;
}

function CommonHeader({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <section
      className={cn(
        'fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[var(--base-w)] mx-auto shadow-[0_0.25rem_0.25rem_-0.125rem_rgba(0,0,0,0.1)]  bg-background z-10  h-14 border-x border-lightGray-5',
        className
      )}
    >
      {children}
    </section>
  );
}

function FixedButtonBgLayout({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <section
      className={cn(
        'fixed left-1/2 -translate-x-1/2 bg-background bottom-0 pt-3.5 px-6 pb-7 rounded-t-[1.3rem] shadow-[-0.125rem_-0.125rem_0.5rem_rgba(0,0,0,0.08)] flex flex-row gap-2 items-center w-full max-w-[var(--base-w)]',
        className
      )}
    >
      {children}
    </section>
  );
}

export function CommonBorder({ className }: Readonly<{ className?: string }>) {
  return (
    <section
      className={cn('mt-7 mb-5 border-t border-gray-200 w-full', className)}
    ></section>
  );
}

export function InputErrorMessage({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <p className={cn('text-red-400 text-xs px-3 pt-1', className)}>
      {children}
    </p>
  );
}

export const CommonLayout = {
  CommonBorder,
  SectionInnerPadding,
  SectionNoPadding,
  CommonHeader,
  FixedButtonBgLayout,
};
