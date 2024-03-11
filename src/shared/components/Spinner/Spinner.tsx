import { FC } from 'react';
import styles from './Spinner.module.scss';

interface SppinnerProps {
  className?: string;
}

export const Spinner: FC<SppinnerProps> = ({ className }) => {
  return <div className={`${styles.spinner} ${className || ''}`} />;
};
