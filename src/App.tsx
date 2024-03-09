import { FC, RefObject, useRef } from 'react';
import { Header } from './sections/Header';
import styles from './App.module.scss';

const App: FC = () => {
  const usersRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);

  const scrollInto = (ref: RefObject<HTMLDivElement>): void => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Header
        onSignUpClick={() => scrollInto(signUpRef)}
        onUsersClick={() => scrollInto(usersRef)}
      />
      <div className={styles.wrapper}>
        <section ref={usersRef}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, tempore.
          Facilis laudantium praesentium, quo eos accusamus omnis veritatis
          libero iure ipsam blanditiis deserunt totam similique tenetur possimus
          sit provident. Fuga corrupti odio corporis nesciunt amet illum nulla
          iusto porro adipisci cupiditate, doloribus neque animi suscipit
          numquam possimus sunt debitis placeat commodi laudantium sit. Ullam,
          nesciunt animi.
        </section>
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
    </>
  );
};

export default App;
