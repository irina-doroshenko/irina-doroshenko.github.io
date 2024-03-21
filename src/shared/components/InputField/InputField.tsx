import { ChangeEvent, FC, FocusEvent } from 'react';
import styles from './InputField.module.scss';
import { formatUkrainePhoneNumber } from '../../../utils/formatUkrainePhoneNumber';

interface InputFieldProps {
  value: string;
  name: string;
  onChange: (value: string) => void;
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
  onBlur,
  type = 'text',
  label,
  helperText,
  isError,
  errorText,
  countyCode = '380',
}) => {
  const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = '';
    if (type === 'tel' && !e.target.value) {
      onChange(`+${countyCode}`);
    }
  };

  const onPhoneChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let barePhone = e.target.value.replace(/\D/g, '');

    if (barePhone.length < countyCode.length) {
      barePhone = `${countyCode}`;
    }

    onChange(`+${barePhone}`);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = label;
    onBlur && onBlur(e);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        value={type === 'tel' ? formatUkrainePhoneNumber(value) : value}
        name={name}
        onChange={type === 'tel' ? onPhoneChangeHandler : onChangeHandler}
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
