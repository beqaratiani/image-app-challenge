import { useInView } from 'react-intersection-observer';
import { useGetImages } from '../hooks/useGetImages';
import { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import MasonryContent from '../components/Home/MasonryContent';

export default function Home() {
  const { data, fetchNextPage } = useGetImages();
  const { ref, inView } = useInView({ threshold: 0.1 });

  console.log(data);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <Masonry
      breakpointCols={{
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
      }}
      className="my-masonry-grid gap-4 flex relative px-20"
      columnClassName="my-masonry-grid_column"
    >
      {MasonryContent({ data, ref })}
    </Masonry>
  );
}
