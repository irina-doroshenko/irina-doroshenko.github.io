import { FC, PropsWithChildren, createContext, useContext } from 'react';
import { RootStore } from '../stores/RootStore';

export const rootStore = new RootStore();

const RootStoreContext = createContext<RootStore | null>(null);

export const RootStoreContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};

export const useRootStoreContext = () => {
  const context = useContext(RootStoreContext);

  if (context === null) {
    throw new Error(
      'RootStoreContext must be used with RootStoreContextProvider'
    );
  }

  return context;
};
