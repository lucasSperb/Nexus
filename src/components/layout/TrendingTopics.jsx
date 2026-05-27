const topics = [
  "#react",
  "#nexus",
  "#frontend",
  "#metalcore",
  "#design",
];

export default function TrendingTopics() {
  return (
    <div className="panel-card">
      <h3>🔥 Trending</h3>

      <div className="trending-list">
        {topics.map((topic) => (
          <div
            key={topic}
            className="trending-item"
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
}