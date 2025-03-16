import { useInfiniteQuery } from '@tanstack/react-query';
import { getImages } from '../services/imagesApi';

export const useGetImages = () => {
  return useInfiniteQuery({
    queryKey: ['images'],
    queryFn: getImages,
    initialPageParam: 1,
    getNextPageParam: (_lastPage, allPages) => {
      return allPages.length + 1;
    },
  });
};
