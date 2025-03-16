import { Hits, Pages } from '../../types/types';
import SingleImage from './SingleImage';

interface MasonryContentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  ref?: React.Ref<HTMLDivElement>;
}

export default function MasonryContent({ data, ref }: MasonryContentProps) {
  return data?.pages.map((pages: Pages) => {
    return [
      ...pages.hits.map((item: Hits) => {
        return <SingleImage key={item.id} item={item} />;
      }),
      <div
        className="absolute h-[400px] bottom-[1000px] left-0"
        ref={ref}
        key="inview"
      />,
    ];
  });
}
