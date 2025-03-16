import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetSingleImage } from '../hooks/useGetSingleImage';
import ImageData from '../components/SingleImage/ImageData';
import SingleImageSkeleton from '../components/Skeletons/SingleImageSkeleton';

export default function SingleImage() {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleImage(id ?? '');
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageSrc = data?.hits[0]?.largeImageURL;

  return (
    <div className="mt-[30px] flex flex-col justify-center items-center gap-[30px] md:flex-row md:gap-[50px] md:items-start pb-[40px]">
      {isLoading || !imageLoaded ? (
        <SingleImageSkeleton />
      ) : (
        <>
          <img
            src={imageSrc}
            className="max-w-[350px] lg:max-w-[500px] object-cover rounded-[10px] shadow-lg"
            onLoad={() => setImageLoaded(true)}
          />
          <ImageData data={data?.hits[0]} />
        </>
      )}

      {imageSrc && (
        <img
          data-testid="single-image-pic"
          src={imageSrc}
          className="hidden"
          onLoad={() => setImageLoaded(true)}
        />
      )}
    </div>
  );
}
