import { FC, RefObject } from 'react';
import { SignUpForm } from './components/SignUpForm';
import { observer } from 'mobx-react-lite';
import { useRootStoreContext } from '../../contexts/RootStoreContext';
import styles from './SignUpSection.module.scss';
import { SuccessScreen } from './components/SuccessScreen';

interface SignUpSectionsProps {
  refElem: RefObject<HTMLElement>;
}

export const SignUpSection: FC<SignUpSectionsProps> = observer(
  ({ refElem }) => {
    const {
      userStore: { isUserCreationSuccess },
    } = useRootStoreContext();

    return (
      <section className={styles.section} ref={refElem}>
        {!isUserCreationSuccess && (
          <h1>
            Working with <span>post</span> request
          </h1>
        )}
        {isUserCreationSuccess && <h1>User successfully registered</h1>}
        {!isUserCreationSuccess && <SignUpForm />}
        {isUserCreationSuccess && <SuccessScreen delayMS={5000} />}
      </section>
    );
  }
);
