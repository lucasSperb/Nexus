import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import RightPanel from "../components/layout/RightPanel";

export default function Explore() {
  return (
    <div className="nexus-container">
      <Sidebar />

      <main className="nexus-main">
        <Header />

        <div className="panel-card">
          <h2>🔥 Explore</h2>

          <p>
            Trending posts, hashtags e
            usuários populares.
          </p>
        </div>

        <div className="explore-grid">
          <div className="explore-card">
            #react
          </div>

          <div className="explore-card">
            #frontend
          </div>

          <div className="explore-card">
            #metalcore
          </div>

          <div className="explore-card">
            #nexus
          </div>
        </div>
      </main>

      <RightPanel />
    </div>
  );
}