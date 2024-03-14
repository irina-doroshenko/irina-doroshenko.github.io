import { FC, RefObject } from 'react';
import { Button } from '../../shared/components/Button';
import { scrollInto } from '../../utils/scrollIntoElement';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';

interface HeaderProps {
  usersRef?: RefObject<HTMLElement>;
  signUpRef?: RefObject<HTMLElement>;
}

export const Header: FC<HeaderProps> = ({ usersRef, signUpRef }) => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <img src={logo} alt="logo"></img>
        <nav>
          <ul>
            <li>
              <Button onClick={() => scrollInto(usersRef)}>users</Button>
            </li>
            <li>
              <Button onClick={() => scrollInto(signUpRef)}>sign up</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
