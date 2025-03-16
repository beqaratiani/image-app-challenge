import { useMutation } from '@tanstack/react-query';
import { handleLogin } from '../services/userApi';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export const useLoginMutation = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  return useMutation({
    mutationFn: handleLogin,
    onSuccess: (data) => {
      setUser(data.email);
      navigate('/home');
    },
  });
};
