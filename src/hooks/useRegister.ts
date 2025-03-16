import { useMutation } from '@tanstack/react-query';
import { handleRegister } from '../services/userApi';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  return useMutation({
    mutationFn: handleRegister,
    onSuccess: (data) => {
      setUser(data.email);
      navigate('/home');
    },
  });
};
