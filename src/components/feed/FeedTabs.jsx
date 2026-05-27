export default function FeedTabs({
  activeTab,
  setActiveTab,
}) {
  const tabs = [
    "For You",
    "Following",
    "Trending",
  ];

  return (
    <div className="feed-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={
            activeTab === tab
              ? "active-tab"
              : ""
          }
          onClick={() =>
            setActiveTab(tab)
          }
        >
          {tab}
        </button>
      ))}
    </div>
  );
}