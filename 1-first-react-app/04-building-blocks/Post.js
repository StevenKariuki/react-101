// Building Blocks 🧱
// Codédex

import FollowButton from "./FollowButton.js";
import LikeButton from "./LikeButton.js";

const postImage = "https://avatars.githubusercontent.com/u/129302633?s=400&u=417d8bd0442798fe01e28dd91ad108bb82cd3af2&v=4";
const userImage = "https://avatars.githubusercontent.com/u/129302633?s=400&u=417d8bd0442798fe01e28dd91ad108bb82cd3af2&v=4";

export default function Post() {
  return (
    <div className="post">
      <div className="user-info">
        <img id="profile-img" src={userImage} alt="Profile Image" /> <p>Vi_brant</p>
        <FollowButton />
      </div>
      <img id="post-img" src={postImage} alt="Post Image" />
      <LikeButton />
    </div>
  );
}