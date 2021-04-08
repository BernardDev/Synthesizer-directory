import {createContext, useContext, useState} from 'react';

const TokenContext = createContext({});

export function TokenProvider(props) {
  // const [token, setToken] = useState();
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <TokenContext.Provider value={{token: token, setToken: setToken}}>
      {props.children}
    </TokenContext.Provider>
  );
}

export default function useToken() {
  return useContext(TokenContext);
}
