import React from 'react';
import { compose, nest, withProps } from 'recompose';
import useContext from './useContext';
import Firebase from '../Firebase';

export const AppContext = React.createContext({});

export const AppProvider = ({ children, initialState }) => {
  const context = useContext(initialState);
  return (
    <AppContext.Provider value={{ ...context, firebase: new Firebase() }}>
      {children}
    </AppContext.Provider>
  );
};

export const withAppProvider = initialState => Component =>
  nest(compose(withProps({ initialState }))(AppProvider), Component);

export const useAppContext = () => React.useContext(AppContext);

export const withAppContext = () => compose(withProps(useAppContext));

export default AppContext;
