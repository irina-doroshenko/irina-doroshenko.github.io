import { FC, RefObject, useRef } from 'react';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { UsersSections } from './sections/Users';
import styles from './App.module.scss';
import { RootStoreContextProvider } from './contexts/RootStoreContext';

const App: FC = () => {
  const usersRef = useRef<HTMLElement>(null);
  const signUpRef = useRef<HTMLElement>(null);

  const scrollInto = (ref: RefObject<HTMLElement>): void => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <RootStoreContextProvider>
      <Header
        onSignUpClick={() => scrollInto(signUpRef)}
        onUsersClick={() => scrollInto(usersRef)}
      />
      <div className={styles.wrapper}>
        <Hero onSignUpClick={() => scrollInto(signUpRef)} />
        <UsersSections refElem={usersRef} />
        <section ref={signUpRef}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          laudantium inventore itaque obcaecati quidem dolore consectetur
          tenetur eaque est libero velit nisi eligendi nihil molestiae adipisci,
          voluptate fugit dicta officiis veritatis voluptatem cupiditate at
          sequi unde. Exercitationem cupiditate, veritatis quae voluptas
          dignissimos voluptate possimus necessitatibus, recusandae ad similique
          sequi rerum magnam ipsam laborum commodi doloribus aliquam, quos eum.
          Aspernatur culpa dolore atque sapiente aliquid earum ex dolor adipisci
          libero beatae cumque impedit sequi, perspiciatis assumenda iusto?
        </section>
      </div>
    </RootStoreContextProvider>
  );
};

export default App;
