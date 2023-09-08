import { ComponentProps, ReactNode } from 'react';
import { cn } from '../../app/utils/cn';
import { Spinner } from './Spinner';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
}

export function Button({
  children, className, isLoading, disabled, ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-secondary rounded-full text-white text-sm py-2 px-4 flex items-center gap-2 justify-center min-w-[128px] max-w-fit disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all',
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {!isLoading && children}
      {isLoading && <Spinner className="w-4 h-4" />}
    </button>
  );
}
