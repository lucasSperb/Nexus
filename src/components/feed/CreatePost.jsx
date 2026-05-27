import {
  Image,
  Mic,
  BarChart3,
} from "lucide-react";

import CustomAudioPlayer from "../common/CustomAudioPlayer";

import { useState } from "react";

export default function CreatePost({
  newPost,
  setNewPost,

  handleCreatePost,

  handleImageUpload,
  handleAudioUpload,

  selectedImage,
  selectedAudio,

  setSelectedAudio,
}) {
  const [pollMode, setPollMode] =
    useState(false);

  const [pollQuestion, setPollQuestion] =
    useState("");

  const [pollOptions, setPollOptions] =
    useState(["", ""]);

  /* =========================
     RESET POLL
  ========================= */

  function resetPoll() {
    setPollMode(false);

    setPollQuestion("");

    setPollOptions(["", ""]);
  }

  /* =========================
     UPDATE OPTION
  ========================= */

  function updatePollOption(
    value,
    index
  ) {
    const updated = [...pollOptions];

    updated[index] = value;

    setPollOptions(updated);
  }

  /* =========================
     ADD OPTION
  ========================= */

  function addPollOption() {
    setPollOptions([
      ...pollOptions,
      "",
    ]);
  }

  /* =========================
     PUBLISH
  ========================= */

  function publishPost() {
    handleCreatePost({
      poll: pollMode
        ? {
            question: pollQuestion,

            options:
              pollOptions
                .filter((option) =>
                  option.trim()
                )
                .map((option) => ({
                  text: option,

                  votes: 0,
                })),
          }
        : null,
    });

    resetPoll();
  }

  return (
    <section className="create-post">
      {/* TEXT */}

      <textarea
        placeholder="What's happening?"
        value={newPost}
        onChange={(e) =>
          setNewPost(e.target.value)
        }
      />

      {/* IMAGE */}

      {selectedImage && (
        <img
          src={selectedImage}
          alt=""
          className="preview-image"
        />
      )}

     {/* AUDIO */}

      {selectedAudio &&
        typeof selectedAudio ===
          "string" && (
          <div className="audio-preview-card">
            <div className="audio-preview-top">
              <div className="audio-preview-header">
                <div className="audio-preview-wave" />

                <div>
                  <h4>Audio Ready</h4>

                  <span>
                    Ready to publish
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="remove-audio-btn"
                onClick={() =>
                  setSelectedAudio("")
                }
              >
                ✕
              </button>
            </div>

            <CustomAudioPlayer
              src={selectedAudio}
            />
          </div>
        )}

      {/* POLL */}

      {pollMode && (
        <div className="poll-container">
          <input
            type="text"
            placeholder="Poll question..."
            value={pollQuestion}
            onChange={(e) =>
              setPollQuestion(
                e.target.value
              )
            }
          />

          {pollOptions.map(
            (option, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Option ${
                  index + 1
                }`}
                value={option}
                onChange={(e) =>
                  updatePollOption(
                    e.target.value,
                    index
                  )
                }
              />
            )
          )}

          <button
            className="add-option-btn"
            onClick={addPollOption}
          >
            + Add Option
          </button>
        </div>
      )}

      {/* ACTIONS */}

      <div className="create-post-actions">
        <div className="post-tools">
          {/* IMAGE */}

          <label className="tool-btn">
            <Image size={18} />

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={
                handleImageUpload
              }
            />
          </label>

          {/* AUDIO */}

          <label className="tool-btn">
            <Mic size={18} />

            <input
              key={selectedAudio}
              type="file"
              accept="audio/*"
              hidden
              onChange={
                handleAudioUpload
              }
            />
          </label>

          {/* POLL */}

          <button
            className={`tool-btn ${
              pollMode
                ? "active-tool"
                : ""
            }`}
            onClick={() =>
              setPollMode(!pollMode)
            }
          >
            <BarChart3 size={18} />
          </button>
        </div>

        <button
          className="publish-btn"
          onClick={publishPost}
        >
          Publish
        </button>
      </div>
    </section>
  );
}