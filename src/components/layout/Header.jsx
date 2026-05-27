import TopbarActions from "./TopbarActions";

export default function Header({
  search,
  setSearch,
}) {
  return (
    <header className="header">
      <div>
        <h2>Home Feed</h2>

        <span className="header-subtitle">
          Explore the future.
        </span>
      </div>

      <div className="header-right">
        <input
          type="text"
          placeholder="Search posts..."
          className="search-input"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <TopbarActions />
      </div>
    </header>
  );
}