import { useMutation } from '@tanstack/react-query';
import { handleLogout } from '../services/userApi';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export const useLogoutMutation = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  return useMutation({
    mutationFn: handleLogout,
    onSuccess: () => {
      setUser('');
      navigate('/auth');
    },
  });
};
