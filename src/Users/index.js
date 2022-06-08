import React from "react";

const Users = (props) => {
  console.log(props, "users");
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photo} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>

          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>

            <span>
              <div>{u.location.city}</div>
              <div>{u.location.country}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
