import { ChangeEvent, FC, FocusEvent } from 'react';
import styles from './InputField.module.scss';

interface InputFieldProps {
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  type?: 'text' | 'tel' | 'email';
  label: string;
  helperText?: string;
  className?: string;
  touched?: boolean;
  isError?: boolean;
  errorText?: string;
  countyCode?: string;
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
  countyCode = '+38',
}) => {
  const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = '';
    if (type === 'tel' && !e.target.value) {
      e.target.value = countyCode;
      onChange(e);
    }
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (type === 'tel') {
      const enteredValue = e.target.value.slice(countyCode.length);
      !enteredValue && (e.target.value = '');
      !enteredValue && onChange(e);
    }
    e.target.placeholder = label;
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        placeholder={label}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        className={`${styles.input} ${isError && styles.error}`}
        autoComplete="off"
      />
      <div
        className={`${styles.labelText} ${isError ? styles.errorText : ''} ${value && styles.upperText}`}
      >
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
