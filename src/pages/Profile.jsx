import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import RightPanel from "../components/layout/RightPanel";

import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileStats from "../components/profile/ProfileStats";

export default function Profile() {
  return (
    <div className="nexus-container">
      <Sidebar />

      <main className="nexus-main">
        <Header />

        <ProfileHeader />

        <ProfileStats />

        <div className="profile-posts">
          <div className="panel-card">
            <h3>Posts</h3>

            <p>
              Seus posts aparecerão aqui.
            </p>
          </div>
        </div>
      </main>

      <RightPanel />
    </div>
  );
}