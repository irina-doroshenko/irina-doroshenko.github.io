import { FC, MouseEventHandler, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  disabled = false,
  className,
  onClick,
  children,
}) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
