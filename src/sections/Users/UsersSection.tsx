import { FC, RefObject } from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from '../../shared/components/Button';
import { Card } from '../../shared/components/UserCard';
import { Spinner } from '../../shared/components/Spinner';
import styles from './UsersSection.module.scss';
import { useRootStoreContext } from '../../contexts/RootStoreContext';

interface UsersSectionsProps {
  refElem: RefObject<HTMLElement>;
}

export const UsersSections: FC<UsersSectionsProps> = observer(({ refElem }) => {
  const { userStore } = useRootStoreContext();
  return (
    <section className={styles.section} ref={refElem}>
      <h1>Working with get request</h1>
      <div className={styles.cardWrapper}>
        {userStore.usersList.map((user, index) => (
          <div key={index} className={styles.cardElement}>
            <Card {...user} />
          </div>
        ))}
      </div>
      {userStore.isUsersLoading && <Spinner className={styles.spinner} />}
      <Button
        disabled={userStore.isUsersLoading || !userStore.isNextPageAvailable}
        onClick={() => userStore.increasePage()}
        className={styles.button}
      >
        get next page
      </Button>
    </section>
  );
});
