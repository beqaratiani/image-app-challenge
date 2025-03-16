import { useQuery } from '@tanstack/react-query';
import { getSingleImage } from '../services/imagesApi';

export const useGetSingleImage = (id: string | undefined) => {
  return useQuery({
    queryKey: ['singleImage', id],
    queryFn: () => getSingleImage(id),
    gcTime: 0,
  });
};
