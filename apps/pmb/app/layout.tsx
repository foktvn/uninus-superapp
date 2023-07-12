'use client';
import { Montserrat } from 'next/font/google';
import { AuthProvider, QueryProvider, RecoilProvider } from '@uninus/providers';
import './global.css';

const monserrat = Montserrat({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${monserrat.className}`}>
      <body>
        <AuthProvider>
          <QueryProvider>
            <RecoilProvider>
              {children}
              <div id="modal" />
            </RecoilProvider>
          </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
