
import React, { useState } from "react";
import ProfileCardNew from "./ProfileCardNew";

const ProfileCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const profiles = [
    {
      id: 1,
      username: "nkchaudhary01",
      location: "Mumbai, India",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/5852e0ea4df052a1bd0dbe7e675fc670494e0d81?placeholderIfAbsent=true",
      dotsSrc: "https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/a47cfed2b221256fdd56efae167730331d02b954?placeholderIfAbsent=true",
    },
    {
      id: 2,
      username: "nkchaudhary01",
      location: "Mumbai, India",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/7154b9b1391fb20f37c023af290e81d471776656?placeholderIfAbsent=true",
      dotsSrc: "https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/88efcc57968571014429e5609309e65524ab94fe?placeholderIfAbsent=true",
    },
    {
      id: 3,
      username: "nkchaudhary01",
      location: "Mumbai, India",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/7154b9b1391fb20f37c023af290e81d471776656?placeholderIfAbsent=true",
      dotsSrc: "https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/25b3950c5996521a97fcf383dc1dfd2204fec0c7?placeholderIfAbsent=true",
    },
    {
      id: 4,
      username: "nkchaudhary01",
      location: "Mumbai, India",
      avatarSrc: "https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/7154b9b1391fb20f37c023af290e81d471776656?placeholderIfAbsent=true",
      dotsSrc: "https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/4adc3c7ff0739b0862ae228669b7be1374338948?placeholderIfAbsent=true",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === profiles.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? profiles.length - 1 : prev - 1));
  };

  return (
    <div className="self-center z-40 flex w-full max-w-[1516px] items-center gap-[40px_48px] max-md:max-w-full max-md:mt-10 max-md:mb-2.5 relative justify-center"> {/* Added justify-center */}
      <button
        onClick={prevSlide}
        className="items-center bg-[#FF6200] self-stretch flex overflow-hidden w-[67px] h-[67px] my-auto px-[26px] py-[21px] rounded-[40px] max-md:px-5 z-50"
        aria-label="Previous profile"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/de662a4b7f0b216b24e4b1945170ae3e0299077d?placeholderIfAbsent=true"
          className="aspect-[0.6] object-contain w-[15px] self-stretch my-auto"
          alt="Previous"
        />
      </button>

      <div className="self-stretch grow shrink basis-auto max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch justify-center"> {/* Added justify-center */}
          {profiles.map((profile, index) => (
            <div key={profile.id} className="w-3/12 max-md:w-full max-md:ml-0 relative">
              <ProfileCardNew
                username={profile.username}
                location={profile.location}
                avatarSrc={profile.avatarSrc}
                dotsSrc={profile.dotsSrc}
                className={index === 0 ? "pt-[25px] pb-[537px] px-[26px]" : ""}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="items-center bg-[#FF6200] self-stretch flex min-h-[69px] overflow-hidden w-[68px] h-[68px] my-auto px-[26px] py-[22px] rounded-[40px] max-md:px-5 z-50"
        aria-label="Next profile"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/178ef81b8a124fbbb36fd103190391ae/52f0b1c9544e63fb49663374711b0c3ca8eb218d?placeholderIfAbsent=true"
          className="aspect-[0.6] object-contain w-[15px] self-stretch my-auto"
          alt="Next"
        />
      </button>
    </div>
  );
};

export default ProfileCarousel;

