import { ChangeEvent, FC } from 'react';
import styles from './InputField.module.scss';

interface InputFieldProps {
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent) => void;
  type?: 'text' | 'tel';
  label: string;
  helperText?: string;
  className?: string;
  touched?: boolean;
  isError?: boolean;
  errorText?: string;
}

export const InputField: FC<InputFieldProps> = ({
  value,
  name,
  onChange,
  type = 'text',
  label,
  helperText,
  isError,
  errorText,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        placeholder={label}
        onFocus={(e) => (e.target.placeholder = '')}
        onBlur={(e) => (e.target.placeholder = label)}
        className={`${styles.input} ${isError && styles.error}`}
        autoComplete="off"
      />
      <div className={`${styles.labelText} ${isError && styles.errorText}`}>
        {label}
      </div>
      {helperText && !isError && (
        <div className={styles.helperText}>{helperText}</div>
      )}
      {isError && errorText && (
        <div className={`${styles.helperText} ${styles.errorText}`}>
          {errorText}
        </div>
      )}
    </div>
  );
};
