const users = [
  {
    name: "Ana",
    username: "@ana",
    avatar:
      "https://i.pravatar.cc/100?img=5",
  },

  {
    name: "John",
    username: "@john",
    avatar:
      "https://i.pravatar.cc/100?img=8",
  },

  {
    name: "Julia",
    username: "@julia",
    avatar:
      "https://i.pravatar.cc/100?img=9",
  },
];

export default function SuggestedUsers() {
  return (
    <div className="panel-card">
      <h3>👥 Suggested</h3>

      {users.map((user) => (
        <div
          className="suggested-user"
          key={user.username}
        >
          <div className="suggested-user-info">
            <img
              src={user.avatar}
              alt=""
            />

            <div>
              <h4>{user.name}</h4>

              <span>
                {user.username}
              </span>
            </div>
          </div>

          <button className="mini-follow-btn">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}