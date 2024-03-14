import { FC, MouseEventHandler, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler;
  type?: 'submit' | 'button';
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  disabled = false,
  className,
  onClick,
  children,
  type = 'submit',
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.button} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
