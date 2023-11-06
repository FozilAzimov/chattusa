import { createContext, useContext, useReducer } from 'react';
import { InitialValue, reducer } from './reducer';

const Context = createContext();
export const ContextHome = () => useContext(Context);

export default function HomeContext ({ children }) {

  const [state, dispatch] = useReducer(reducer, InitialValue);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  )
}
