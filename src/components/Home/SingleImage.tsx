import { useNavigate } from 'react-router-dom';
import { Hits } from '../../types/types';

interface SingleImageProps {
  item: Hits;
}

export default function SingleImage({ item }: SingleImageProps) {
  const navigate = useNavigate();

  return (
    <div
      className="relative mb-6 break-inside-avoid group cursor-pointer"
      onClick={() => navigate(`/singleImage/${item.id}`)}
    >
      <img
        className="w-full object-cover rounded-lg"
        src={item.largeImageURL}
        alt={item.user}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>

      <div className="absolute bottom-2 left-2 text-white text-sm font-medium bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {item.user}
      </div>
    </div>
  );
}
