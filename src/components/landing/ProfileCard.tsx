import React from "react";
interface ProfileCardProps {
  username: string;
  profession: string;
  followers: string;
  followersGained: string;
  avgLikes: string;
}
export const ProfileCard: React.FC<ProfileCardProps> = ({
  username,
  profession,
  followers,
  followersGained,
  avgLikes
}) => {
  return;
};
export default ProfileCard;