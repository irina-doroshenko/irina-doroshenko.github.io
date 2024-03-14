/* eslint-disable react/no-unescaped-entities */
import { FC, RefObject } from 'react';
import { Button } from '../../shared/components/Button';
import { scrollInto } from '../../utils/scrollIntoElement';
import heroImage from '../../assets/heroImage.webp';
import styles from './Hero.module.scss';

interface HeroProps {
  signUpRef?: RefObject<HTMLElement>;
}

export const Hero: FC<HeroProps> = ({ signUpRef }) => {
  return (
    <section className={styles.hero}>
      <img
        src={heroImage}
        className={styles.backgroundImg}
        loading={'lazy'}
        alt="background image"
      />
      <h1>Test assignment for front-end developer</h1>
      <p>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <Button onClick={() => scrollInto(signUpRef)} className={styles.button}>
        sign up
      </Button>
    </section>
  );
};
