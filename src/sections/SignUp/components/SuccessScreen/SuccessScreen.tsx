import { FC, useEffect } from 'react';
import { Button } from '../../../../shared/components/Button';
import SuccessImg from '../../../../assets/success-image.svg';
import styles from './SuccessScreen.module.scss';
import { useRootStoreContext } from '../../../../contexts/RootStoreContext';

export const SuccessScreen: FC<{ delayMS: number }> = ({ delayMS }) => {
  const {
    userStore: { setIsUserCreationSuccess },
  } = useRootStoreContext();

  useEffect(() => {
    const timer = setTimeout(() => setIsUserCreationSuccess(false), delayMS);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <img loading="lazy" src={SuccessImg} className={styles.successImg} />
      <Button
        className={styles.button}
        onClick={() => setIsUserCreationSuccess(false)}
      >
        Back
      </Button>
    </>
  );
};
