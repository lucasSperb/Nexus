import {
  Play,
  Pause,
  SkipForward,
} from "lucide-react";

import { useState } from "react";

export default function MusicPlayer() {
  const [playing, setPlaying] =
    useState(false);

  return (
    <div className="music-player">
      <img
        src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=800&auto=format&fit=crop"
        alt=""
      />

      <div className="music-info">
        <h4>Neon Dreams</h4>

        <span>Nexus Sounds</span>
      </div>

      <div className="music-controls">
        <button
          onClick={() =>
            setPlaying(!playing)
          }
        >
          {playing ? (
            <Pause size={18} />
          ) : (
            <Play size={18} />
          )}
        </button>

        <button>
          <SkipForward size={18} />
        </button>
      </div>
    </div>
  );
}