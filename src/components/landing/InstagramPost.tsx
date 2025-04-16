
import React from 'react';
interface InstagramPostProps {
  imageUrl: string;
  likes: string;
  comments: string;
}
const InstagramPost: React.FC<InstagramPostProps> = ({
  imageUrl,
  likes,
  comments
}) => {
  return <div className="bg-[rgba(20,20,20,1)] shadow-[3px_5px_20px_rgba(0,0,0,0.5)] border z-10 flex w-[85%] flex-col self-stretch items-stretch px-[5px] rounded-[20px] border-[rgba(41,41,46,1)] border-solid py-[14px] my-[13px]">
      <div className="flex items-stretch gap-2.5 font-medium mx-2.5">
        <img src="https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/2de249d35ef872632cbb3051ce541039f332c766?placeholderIfAbsent=true" className="aspect-[1] object-contain w-10 shrink-0 rounded-[50%]" alt="User avatar" />
        <div className="flex flex-col items-stretch my-auto">
          <div className="flex items-stretch gap-5 text-sm text-white whitespace-nowrap justify-between">
            <div>cameron_will</div>
            <img src="https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/f60d8afbb7180ce030b3c45e23e74f268a1d0fad?placeholderIfAbsent=true" className="aspect-[4.5] object-contain w-[18px] shrink-0 mt-3.5" alt="Verified badge" />
          </div>
          <div className="text-[rgba(118,119,126,1)] text-[10px]">
            New Delhi, India
          </div>
        </div>
      </div>
      <img src={imageUrl} className="aspect-[1] object-contain w-full mt-[15px] rounded-[15px]" alt="Post image" />
      <div className="flex items-stretch gap-5 justify-between mt-[15px] mx-2.5">
        <div className="text-xs text-white font-medium">
          <img src="https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/c20994d0d17db4a3bda9ed089054811be3a5eb17?placeholderIfAbsent=true" className="aspect-[1.12] object-contain w-[18px]" alt="Like icon" />
          <div className="mt-4">
            <span className="font-normal text-white">Liked by Lucas</span>
            <span className="font-extrabold text-white">
              {" "}
              and {likes} others
            </span>{" "}
          </div>
        </div>
        <div className="flex flex-col items-stretch">
          <img src="https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/e9276ab88e5e6958c2235478ac22463e48c18f90?placeholderIfAbsent=true" className="aspect-[0.81] object-contain w-[13px]" alt="Bookmark icon" />
          <img src="https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/953882cdf18c550d1b0846d3c98e3c2a8841b7d6?placeholderIfAbsent=true" className="aspect-[2.33] object-contain w-[35px] mt-[15px]" alt="Comment icon" />
        </div>
      </div>
      <div className="flex items-stretch gap-1.5 text-xs text-white font-medium ml-2.5 mt-2.5">
        <img src="https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/87282674d65da2fcd1470b98d730ef4d67d409b9?placeholderIfAbsent=true" className="aspect-[1.4] object-contain w-[7px] shrink-0 my-auto" alt="Arrow icon" />
        <div className="basis-auto">
          Million Parrots in india Like a Family... (More)
        </div>
      </div>
      <div className="text-[rgba(118,119,126,1)] text-[10px] font-medium ml-6 max-md:ml-2.5">
        Wed, 26 January 2021
      </div>
    </div>;
};

export default InstagramPost;
