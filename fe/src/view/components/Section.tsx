import { ReactNode } from 'react';

export function Section({ children }: {children: ReactNode}) {
  return (
    <section className="bg-white w-full max-w-5xl py-6 px-8 rounded-2xl">
      {children}
    </section>
  );
}
