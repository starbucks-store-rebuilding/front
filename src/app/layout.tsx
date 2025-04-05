import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { getServerSession } from 'next-auth';
import { options } from './api/auth/[...nextauth]/options';
import AuthContextProvider from '@/provider/AuthContextProvider';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: '스타벅스 스토어',
    template: '%s | 스타벅스 스토어',
  },
  description: '스파로스 6기 1차 프로젝트 스타벅스 스토어 리빌딩',
  icons: { icon: '/images/starbucks-logo.png' },
  metadataBase: new URL('https://starbucks-store.shop'),
  openGraph: {
    url: 'https://starbucks-store.shop',
    title: '스타벅스 스토어',
    description: '스파로스 6기 1차 프로젝트 스타벅스 스토어 리빌딩',
    images: [{ url: '/images/starbucks-logo.png' }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);
  console.log('session', session);
  const isAuth = !!session?.user as boolean;
  console.log('isAuth', isAuth);
  return (
    <html
      lang="ko"
      className="antialiased w-full min-h-screen bg-background max-w-[var(--base-w)] mx-auto
      border-x border-lightGray-5"
    >
      <body className={`${geistSans.variable} ${geistMono.variable} relative`}>
        <AuthContextProvider isAuth={isAuth}>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
