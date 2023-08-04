import { cls } from '@/lib/utils';
import React from 'react';

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  bordered?: boolean;
  error?: string;
  parentClassName?: string;
  full?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      error,
      className,
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
        <textarea
          className={cls(
            'textarea w-full min-h-[150px]',
            { 'textarea-bordered': bordered },
            { 'textarea-error': !!error },
            className
          )}
          {...props}
        />
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

TextArea.displayName = 'TextArea';

export default TextArea;
