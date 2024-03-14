import { FC, useRef } from 'react';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { UsersSections } from './sections/Users';
import styles from './App.module.scss';
import { RootStoreContextProvider } from './contexts/RootStoreContext';
import { SignUpSection } from './sections/SignUp';

const App: FC = () => {
  const usersRef = useRef<HTMLElement>(null);
  const signUpRef = useRef<HTMLElement>(null);

  return (
    <RootStoreContextProvider>
      <Header usersRef={usersRef} signUpRef={signUpRef} />
      <div className={styles.wrapper}>
        <Hero signUpRef={signUpRef} />
        <UsersSections refElem={usersRef} />
        <SignUpSection refElem={signUpRef} />
      </div>
    </RootStoreContextProvider>
  );
};

export default App;
