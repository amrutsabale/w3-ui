import React, { FC, HTMLAttributes, ReactElement, ReactNode } from 'react';
import cx from 'classnames';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text for the button */
  children: ReactNode;

  /** Which variant look would you like to use */
  variant?: 'solid' | 'outline' | 'link' | 'disabled';

  linkUrl?: string;

  /** Show an icon before the button's label */
  leftIcon: ReactElement;

  /** Show an icon after the button's label */
  rightIcon: ReactElement;

  rounded: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'solid',
  linkUrl = '#',
  leftIcon,
  rightIcon,
  rounded = false,
  ...props
}) => {
  const solidClass =
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';
  const outlineClass =
    'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded';
  const disabledClass =
    'bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed';
  const linkClass = 'text-blue-600 font-bold py-2 px-4';
  return (
    <button
      className={cx({
        [solidClass]: variant === 'solid',
        [outlineClass]: variant === 'outline',
        [disabledClass]: variant === 'disabled',
        [linkClass]: variant === 'link',
        'rounded-full': rounded,
      })}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {variant === 'link' ? (
        <a
          href={linkUrl}
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
        >
          Link
        </a>
      ) : (
        <>{children}</>
      )}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
