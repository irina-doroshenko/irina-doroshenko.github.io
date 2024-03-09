import { FC } from 'react';
import styles from './Avatar.module.scss';
import fallbackImage from '../../../assets/avatar-fallback.svg';

interface AvatarProps {
  source?: string | null;
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({ source, className = '' }) => {
  return (
    <img
      loading="lazy"
      className={`${styles.avatar} ${className}`}
      src={source || fallbackImage}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = fallbackImage;
      }}
    />
  );
};
