import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../images/user.png";
import style from "../Users/style.module.css";

const Users = (props) => {
  debugger
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && style.selectedPage}
              onClick={() => {
                props.onPageChange(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>

      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/"}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                />
              </NavLink>
              {/* <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                /> */}
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingInProgres}
                  onClick={() => {props.unFollow(u.id)}}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgres}
                  onClick={() => {props.follow(u.id)}}
                >
                  {" "}
                  Follow
                </button>
              )}
            </div>
          </span>

          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>

            <span>
              {/* <div>{u.location.city}</div> */}
              {/* <div>{u.location.country}</div> */}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
