import { FC, InputHTMLAttributes } from 'react';
import styles from './FileInput.module.scss';

interface FileInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'> {
  id: string;
  value: File | null;
  buttonText: string;
  touched?: boolean;
  isError?: boolean;
  errorText?: string;
}

export const FileInput: FC<FileInputProps> = ({
  id,
  name,
  value,
  onChange,
  onBlur,
  accept,
  errorText,
  isError,
  buttonText,
  placeholder = '',
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label
        htmlFor={id}
        className={`${styles.input} ${isError ? styles.error : ''}`}
      >
        <div className={styles.button}>{buttonText}</div>
        <input
          id={id}
          type="file"
          name={name}
          accept={accept}
          onChange={(e) => {
            onChange && onChange(e);
          }}
          onBlur={(e) => onBlur && onBlur(e)}
        />
        <p className={value ? styles.fileName : styles.placeholder}>
          {value ? value.name : placeholder}
        </p>
      </label>
      {isError && errorText && (
        <div className={styles.errorText}>{errorText}</div>
      )}
    </div>
  );
};
