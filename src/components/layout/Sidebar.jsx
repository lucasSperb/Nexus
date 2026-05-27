import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <h1 className="logo">
          ⚡ NEXUS
        </h1>

        <nav className="sidebar-nav">
          <Link to="/">
            <button style={{width: "100%"}}>
              🏠 Home
            </button>
          </Link>

          <Link to="/explore">
            <button style={{width: "100%"}}>
              🔍 Explore
            </button>
          </Link>

          <button style={{width: "100%"}}>
            🔔 Notifications
          </button>

          <Link to="/messages">
            <button style={{width: "100%"}}>
              💬 Messages
            </button>
          </Link>

          <button style={{width: "100%"}}>
            🎵 Music
          </button>

          <Link to="/profile">
            <button style={{width: "100%"}}>
              👤 Profile
            </button>
          </Link>
        </nav>
      </div>

      <div className="sidebar-profile">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt=""
          className="avatar"
        />

        <div>
          <h4>Lucas</h4>

          <span>@lucas</span>
        </div>
      </div>
    </aside>
  );
}