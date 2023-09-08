import { ComponentProps, ReactNode } from 'react';
import { cn } from '../../app/utils/cn';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  className?: string;

}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-primary rounded-full text-white py-2 px-4 flex items-center gap-2 justify-center min-w-[128px] max-w-fit',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
