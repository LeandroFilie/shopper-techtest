import { ReactNode } from 'react';
import { cn } from '../../app/utils/cn';

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className, ...props }: ButtonProps) {
  return (
    <section
      className={cn(
        'bg-white w-full max-w-5xl py-6 px-8 rounded-2xl',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
