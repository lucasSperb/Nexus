import { useState } from "react";

export default function ProfileHeader() {
  const [following, setFollowing] =
    useState(false);

  return (
    <section className="profile-header">
      <div className="profile-banner" />

      <div className="profile-info">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt=""
          className="profile-avatar"
        />

        <div className="profile-data">
          <h2>Lucas</h2>

          <span>@lucas</span>

          <p>
            Frontend Developer • React •
            UI Design
          </p>
        </div>

        <button
          className={
            following
              ? "following-btn"
              : "follow-btn"
          }
          onClick={() =>
            setFollowing(!following)
          }
        >
          {following
            ? "Following"
            : "Follow"}
        </button>
      </div>
    </section>
  );
}