'use client';

import React from 'react';

import { cls } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  bordered?: boolean;
  error?: string;
  right?: React.ReactNode;
  parentClassName?: string;
  full?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      className,
      right,
      bordered = true,
      parentClassName,
      full,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cls(
          'w-full max-w-sm',
          { 'max-w-none': full },
          parentClassName
        )}
      >
        {label && (
          <label className="label">
            <span className="text-sm sm:text-base font-semibold">{label}</span>
          </label>
        )}
        <div className="relative w-full">
          <input
            className={cls(
              'input w-full',
              {
                'input-error': !!error,
              },
              {
                'input-bordered': bordered,
              },
              className
            )}
            ref={ref}
            {...props}
          />
          <span className="absolute right-5 top-3">{right}</span>
        </div>
        {error && (
          <label className="absolute label">
            <span className="label-text-alt text-error font-medium">
              {error}
            </span>
          </label>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
