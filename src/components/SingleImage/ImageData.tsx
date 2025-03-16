import { useState } from 'react';
import {
  FaHeart,
  FaBookmark,
  FaComment,
  FaShare,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
import { Hits } from '../../types/types';
import { formatNumber } from '../../helpers/formatNumber';

interface ImageDataProps {
  data: Hits;
}

export default function ImageData({ data }: ImageDataProps) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="w-[350px]  rounded-[10px] border-[1px] border-border shadow-lg p-[15px]">
      <div className="flex items-center justify-between pb-[20px] border-b-[1px] border-b-border">
        <div className="px-[13px] h-[43px] flex items-center justify-center gap-[5px] border-[1px] border-border rounded-[10px]">
          <FaHeart className="text-primary" size={20} />
          <p className="text-primary">{formatNumber(data?.likes)}</p>
        </div>

        <div className="px-[13px] h-[43px] flex items-center justify-center gap-[5px] border-[1px] border-border rounded-[10px]">
          <FaBookmark className="text-primary" size={20} />
          <p className="text-primary">{formatNumber(data?.downloads)}</p>
        </div>

        <div className="px-[13px] h-[43px] flex items-center justify-center gap-[5px] border-[1px] border-border rounded-[10px]">
          <FaComment className="text-primary" size={20} />
          <p className="text-primary">{formatNumber(data?.comments)}</p>
        </div>

        <div className="px-[13px] h-[43px] flex items-center justify-center gap-[5px] border-[1px] border-border rounded-[10px]">
          <FaShare className="text-primary" size={20} />
        </div>
      </div>

      <div className="pb-[20px] border-b-[1px] border-b-border">
        <div className="mt-[20px] flex flex-col gap-[10px]">
          <div className="flex items-center justify-between">
            <p className="text-secondary">Views</p>
            <p className="text-primary">{data.views}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-secondary">Likes</p>
            <p className="text-primary">{data.likes}</p>
          </div>

          {showDetails && (
            <>
              <div className="flex items-center justify-between">
                <p className="text-secondary">Comments</p>
                <p className="text-primary">{data.comments}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-secondary">Resolution</p>
                <p className="text-primary">
                  {data.imageWidth} x {data.imageHeight}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-secondary">Downloads</p>
                <p className="text-primary">{data.downloads}</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-secondary">Type</p>
                <p className="text-primary">{data.type}</p>
              </div>
            </>
          )}
        </div>
        <div
          className="mt-[10px] flex items-center gap-[10px] cursor-pointer"
          onClick={() => setShowDetails((isOpen) => !isOpen)}
        >
          {!showDetails ? (
            <p className="text-secondary">Show Details</p>
          ) : (
            <p className="text-secondary">Hide Details</p>
          )}
          {!showDetails ? (
            <FaChevronDown size={16} className="text-secondary" />
          ) : (
            <FaChevronUp size={16} className="text-secondary" />
          )}
        </div>
      </div>
      <div className="mt-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[15px]">
            <img
              src={data?.userImageURL}
              alt="user"
              className="w-[50px] h-[50px] rounded-[50%] object-cover"
            />
            <div className="flex flex-col gap-[4px]">
              <p className="text-primary">{data.user}</p>
              <p className="text-secondary">104 followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
