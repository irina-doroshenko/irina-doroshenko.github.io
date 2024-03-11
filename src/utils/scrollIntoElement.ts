import { RefObject } from 'react';

export const scrollInto = <T extends HTMLElement>(ref?: RefObject<T>): void => {
  ref?.current?.scrollIntoView({
    behavior: 'smooth',
  });
};
