
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProfileCard from "./ProfileCardNew";

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

const ProfileCarousel: React.FC = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-6xl mx-auto"
    >
      <CarouselContent className="-ml-4">
        {profiles.map((profile) => (
          <CarouselItem key={profile.id} className="pl-4 md:basis-1/3 lg:basis-1/4">
            <ProfileCard
              username={profile.username}
              location={profile.location}
              avatarSrc={profile.avatarSrc}
              dotsSrc={profile.dotsSrc}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default ProfileCarousel;
