import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export const useIsUser = () => {
  const { setUser } = useContext(UserContext);
  const mt = localStorage.MockToken;
  setUser(mt);

  return !!mt;
};
