import TrendingTopics from "./TrendingTopics";
import SuggestedUsers from "./SuggestedUsers";

export default function RightPanel() {
  return (
    <aside className="right-panel">
      <TrendingTopics />

      <SuggestedUsers />
    </aside>
  );
}