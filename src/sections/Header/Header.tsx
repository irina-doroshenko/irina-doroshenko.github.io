import { FC } from 'react';
import { Button } from '../../shared/components/Button';
import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';

interface HeaderProps {
  onUsersClick: () => void;
  onSignUpClick: () => void;
}

export const Header: FC<HeaderProps> = ({ onSignUpClick, onUsersClick }) => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <img src={logo}></img>
        <nav>
          <ul>
            <li>
              <Button onClick={() => onUsersClick()}>users</Button>
            </li>
            <li>
              <Button onClick={() => onSignUpClick()}>sign up</Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
