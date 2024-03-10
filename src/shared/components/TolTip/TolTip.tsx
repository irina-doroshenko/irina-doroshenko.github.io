import { FC, PropsWithChildren } from 'react';
import styles from './TolTip.module.scss';

interface TolTipProps {
  message: string;
  hidden?: boolean;
}

export const TolTip: FC<PropsWithChildren<TolTipProps>> = ({
  message,
  children,
  hidden = false,
}) => {
  return hidden ? (
    <>{children}</>
  ) : (
    <div className={styles.tooltip}>
      <div className={styles.targetElement}>{children}</div>
      <p className={styles.tooltipText}>{message}</p>
    </div>
  );
};
