import { ReactNode } from 'react';
import { Header } from '../components/Header';

export function HomeLayout({ children }: {children: ReactNode}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
