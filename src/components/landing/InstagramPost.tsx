import React from "react";

export const InstagramPost: React.FC = () => {
  return (
    <div className="bg-[rgba(20,20,20,1)] shadow-[3px_5px_20px_rgba(0,0,0,0.5)] border z-10 flex w-full flex-col self-stretch items-stretch px-[5px] py-[15px] rounded-[20px] border-[rgba(41,41,46,1)] border-solid ml">
      <div className="flex items-stretch gap-2.5 font-medium mx-2.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/615bc2edc683f47f7dccd2524d945fd1c00d83a3886f48b7a805e1d29fe575cf?placeholderIfAbsent=true"
          alt="Profile"
          className="aspect-[1] object-contain w-10 shrink-0 rounded-[50%]"
        />
        <div className="flex flex-col items-stretch my-auto">
          <div className="flex items-stretch gap-5 text-sm text-white whitespace-nowrap justify-between">
            <div>cameron_will</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/741c0a4dc2d188673df47564839a5e1c36223daccf04ea2b935738039fea2f28?placeholderIfAbsent=true"
              alt="Options"
              className="aspect-[4.5] object-contain w-[18px] shrink-0 mt-3.5"
            />
          </div>
          <div className="text-[rgba(118,119,126,1)] text-[10px]">
            New Delhi, India
          </div>
        </div>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/36f1509b6d117156e020bede267366fb503e2d7089584bf0301612a24aae99d6?placeholderIfAbsent=true"
        alt="Post image"
        className="aspect-[1] object-contain w-full mt-[15px] rounded-[15px]"
      />
      <div className="flex items-stretch gap-5 justify-between mt-[15px] mx-2.5">
        <div className="text-xs text-white font-medium">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/39bd7c3f2cc644aa7f9001846ed73e0bc9d8c3e171e1a61d0df123461f25f8fc?placeholderIfAbsent=true"
            alt="Like"
            className="aspect-[1.12] object-contain w-[18px]"
          />
          <div className="mt-4">
            <span style={{ fontWeight: 400, color: "rgba(255,255,255,1)" }}>
              Liked by Lucas
            </span>
            <span style={{ fontWeight: 800, color: "rgba(255,255,255,1)" }}>
              {" "}
              and 903 others
            </span>{" "}
          </div>
        </div>
        <div className="flex flex-col items-stretch">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca739adafe7e393ffe73029acf32109a31303e2f85030846d0367bbfbf6ad576?placeholderIfAbsent=true"
            alt="Comment"
            className="aspect-[0.81] object-contain w-[13px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2f7f0b6f7eb2b71bc8a1d4e1a5b0bfb5f7195aed6e60af6aa6d672e6143dbc8?placeholderIfAbsent=true"
            alt="Share"
            className="aspect-[2.33] object-contain w-[35px] mt-[15px]"
          />
        </div>
      </div>
      <div className="flex items-stretch gap-1.5 text-xs text-white font-medium ml-2.5 mt-2.5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/342ee24061d7587749c64ff334b93380c1bb39bb424151da4d79657b358a3240?placeholderIfAbsent=true"
          alt="Caption"
          className="aspect-[1.4] object-contain w-[7px] shrink-0 my-auto"
        />
        <div className="basis-auto">
          Million Parrots in india Like a Family... (More)
        </div>
      </div>
      <div className="text-[rgba(118,119,126,1)] text-[10px] font-medium ml-6 max-md:ml-2.5">
        Wed, 26 January 2021
      </div>
    </div>
  );
};

export default InstagramPost;
