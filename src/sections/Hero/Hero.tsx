/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import { Button } from '../../shared/components/Button';
import heroImage from '../../assets/heroImage.jpg';
import styles from './Hero.module.scss';

interface HeroProps {
  onSignUpClick: () => void;
}

export const Hero: FC<HeroProps> = ({ onSignUpClick }) => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url("${heroImage}")`,
      }}
    >
      <h1>Test assignment for front-end developer</h1>
      <p>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <Button onClick={onSignUpClick}>sign up</Button>
    </section>
  );
};
