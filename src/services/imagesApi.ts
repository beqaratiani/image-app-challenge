import { axios } from './axios';

export const getImages = async ({ pageParam }: { pageParam: number }) => {
  const { data } = await axios.get(`?page=${pageParam}&per_page${20}`);
  return data;
};

export const getSingleImage = async (id: string | undefined) => {
  const { data } = await axios.get(`?id=${id}`);
  return data;
};
