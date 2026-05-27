import { Link } from "react-router-dom";

export default function MobileNavbar() {
  return (
    <nav className="mobile-navbar">
      <Link to="/">
        <button>🏠</button>
      </Link>

      <Link to="/explore">
        <button>🔍</button>
      </Link>

      <Link to="/messages">
        <button>💬</button>
      </Link>

      <Link to="/profile">
        <button>👤</button>
      </Link>
    </nav>
  );
}