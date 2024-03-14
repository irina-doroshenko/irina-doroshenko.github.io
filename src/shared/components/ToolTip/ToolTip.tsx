import { FC, PropsWithChildren } from 'react';
import styles from './ToolTip.module.scss';

interface ToolTipProps {
  message: string;
  hidden?: boolean;
}

export const ToolTip: FC<PropsWithChildren<ToolTipProps>> = ({
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
