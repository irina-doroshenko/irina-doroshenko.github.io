import { FC, RefObject, useEffect } from 'react';
import { SignUpForm } from './components/SignUpForm';
import { observer } from 'mobx-react-lite';
import { useRootStoreContext } from '../../contexts/RootStoreContext';
import SuccessImg from '../../assets/success-image.svg';
import styles from './SignUpSection.module.scss';

interface SignUpSectionsProps {
  refElem: RefObject<HTMLElement>;
}

export const SignUpSection: FC<SignUpSectionsProps> = observer(
  ({ refElem }) => {
    const {
      userStore: { isUserCreationSuccess, setIsUserCreationSuccess },
    } = useRootStoreContext();

    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (isUserCreationSuccess) {
        timer = setTimeout(() => setIsUserCreationSuccess(false), 5000);
      }

      return () => clearTimeout(timer);
    }, [isUserCreationSuccess, setIsUserCreationSuccess]);

    return (
      <section className={styles.section} ref={refElem}>
        {!isUserCreationSuccess && (
          <h1>
            Working with <span>post</span> request
          </h1>
        )}
        {isUserCreationSuccess && <h1>User successfully registered</h1>}
        {!isUserCreationSuccess && <SignUpForm />}
        {isUserCreationSuccess && (
          <img loading="lazy" src={SuccessImg} className={styles.successImg} />
        )}
      </section>
    );
  }
);
