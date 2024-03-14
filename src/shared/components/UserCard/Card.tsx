import { FC, useRef } from 'react';
import { Avatar } from '../Avatar';
import styles from './Card.module.scss';
import { ToolTip } from '../ToolTip';
import { useIsOverflow } from '../../../hooks/useIsOverflow';
import { formatUkrainePhoneNumber } from '../../../utils/formatUkrainePhoneNumber';
import { User } from '../../../stores/types';

export const Card: FC<User> = ({ name, email, phone, position, photo }) => {
  const nameRef = useRef(null);
  const positionRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const isNameOverflowing = useIsOverflow(nameRef);
  const isPositionOverflowing = useIsOverflow(positionRef);
  const isEmailOverflowing = useIsOverflow(emailRef);
  const isPhoneOverflowing = useIsOverflow(phoneRef);

  return (
    <div className={styles.card}>
      <Avatar source={photo} />
      <div className={styles.name}>
        <ToolTip message={name} hidden={!isNameOverflowing}>
          <p className={styles.text} ref={nameRef}>
            {name}
          </p>
        </ToolTip>
      </div>
      <div className={styles.info}>
        <ToolTip message={position} hidden={!isPositionOverflowing}>
          <p className={styles.text} ref={positionRef}>
            {position}
          </p>
        </ToolTip>
        <ToolTip message={email} hidden={!isEmailOverflowing}>
          <p className={styles.text} ref={emailRef}>
            {email}
          </p>
        </ToolTip>
        <ToolTip message={phone} hidden={!isPhoneOverflowing}>
          <p className={styles.text} ref={phoneRef}>
            {formatUkrainePhoneNumber(phone)}
          </p>
        </ToolTip>
      </div>
    </div>
  );
};
