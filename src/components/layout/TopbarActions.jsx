import {
  Bell,
  Music2,
  Plus,
} from "lucide-react";

import { useState } from "react";

import NotificationsDropdown from "./NotificationsDropdown";
import MusicPlayer from "./MusicPlayer";
import ThemeToggle from "./ThemeToggle";

export default function TopbarActions() {
  const [openNotifications, setOpenNotifications] =
    useState(false);

  const [openPlayer, setOpenPlayer] =
    useState(false);

  return (
    <div className="topbar-actions">
      <ThemeToggle />

      <button
        className="topbar-icon"
        onClick={() =>
          setOpenNotifications(
            !openNotifications
          )
        }
      >
        <Bell size={20} />
      </button>

      <button
        className="topbar-icon"
        onClick={() =>
          setOpenPlayer(!openPlayer)
        }
      >
        <Music2 size={20} />
      </button>

      <button className="create-floating-btn">
        <Plus size={20} />
      </button>

      {openNotifications && (
        <NotificationsDropdown />
      )}

      {openPlayer && <MusicPlayer />}
    </div>
  );
}