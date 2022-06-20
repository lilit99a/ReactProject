import React from "react";
import style from "./style.module.css"


const News = () => {
  return (
    <div>
      <img src="https://lh3.googleusercontent.com//J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=rj-w300-h300-l95-c0xffffff"></img>
      <button className={style.followButton} >Follow</button>
      <button className={style.unfollowButton}>Unfollow</button>
    </div>
  );
};

export default News;