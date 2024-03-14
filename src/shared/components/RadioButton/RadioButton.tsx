import { ChangeEvent, FC } from 'react';
import styles from './RadioButton.module.scss';

interface RadioButtonProps {
  id: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  value: string;
  label: string;
  className?: string;
}

export const RadioButton: FC<RadioButtonProps> = ({
  id,
  name,
  onChange,
  checked,
  value,
  label,
  className = '',
}) => {
  return (
    <label htmlFor={id} className={`${styles.label} ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <span className={`${styles.radio} ${checked ? styles.checked : ''}`} />
      <span className={styles.labelText}>{label}</span>
    </label>
  );
};
