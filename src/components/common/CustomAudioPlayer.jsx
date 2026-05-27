import {
  Play,
  Pause,
  Volume2,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

export default function CustomAudioPlayer({
  src,
}) {
  const audioRef = useRef(null);

  const [playing, setPlaying] =
    useState(false);

  const [progress, setProgress] =
    useState(0);

  const [duration, setDuration] =
    useState(0);

  const [currentTime, setCurrentTime] =
    useState(0);

  /* =========================
     PLAY / PAUSE
  ========================= */

  function togglePlay() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  }

  /* =========================
     UPDATE TIME
  ========================= */

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    function updateProgress() {
      setCurrentTime(audio.currentTime);

      setDuration(audio.duration || 0);

      setProgress(
        (audio.currentTime /
          audio.duration) *
          100 || 0
      );
    }

    audio.addEventListener(
      "timeupdate",
      updateProgress
    );

    audio.addEventListener(
      "ended",
      () => setPlaying(false)
    );

    return () => {
      audio.removeEventListener(
        "timeupdate",
        updateProgress
      );
    };
  }, []);

  /* =========================
     SEEK
  ========================= */

  function handleSeek(e) {
    const value = e.target.value;

    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime =
      (value / 100) * duration;

    setProgress(value);
  }

  /* =========================
     FORMAT TIME
  ========================= */

  function formatTime(time) {
    if (!time) return "0:00";

    const minutes = Math.floor(
      time / 60
    );

    const seconds = Math.floor(
      time % 60
    )
      .toString()
      .padStart(2, "0");

    return `${minutes}:${seconds}`;
  }

  return (
    <div className="custom-audio-player">
      <audio
        ref={audioRef}
        src={src}
      />

      {/* TOP */}

      <div className="custom-audio-top">
        <div className="audio-disc">
          <Volume2 size={18} />
        </div>

        <div className="audio-meta">
          <h4>Audio Post</h4>

          <span>
            Nexus Audio System
          </span>
        </div>
      </div>

      {/* PROGRESS */}

      <div className="audio-progress-wrapper">
        <span>
          {formatTime(currentTime)}
        </span>

        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="audio-progress"
        />

        <span>
          {formatTime(duration)}
        </span>
      </div>

      {/* CONTROLS */}

      <div className="audio-controls">
        <button
          className="audio-play-btn"
          onClick={togglePlay}
        >
          {playing ? (
            <Pause size={18} />
          ) : (
            <Play size={18} />
          )}
        </button>
      </div>
    </div>
  );
}