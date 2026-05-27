import {
  MoreHorizontal,
  Pencil,
} from "lucide-react";

import { useState } from "react";

import PostActions from "./PostActions";
import CommentsSection from "./CommentsSection";

import timeAgo from "../../utils/timeAgo";
import PollCard from "./PollCard";
import CustomAudioPlayer from "../common/CustomAudioPlayer";

export default function PostCard({
  post,
  onLike,
  onDelete,
  onComment,
  onShare,
  onSave,
}) {
  const [editing, setEditing] =
    useState(false);

  const [text, setText] =
    useState(post.content);

  const [openImage, setOpenImage] =
    useState(false);

  return (
    <>
      <article className="post-card">
        {/* HEADER */}

        <div className="post-header">
          <div className="post-user">
            <div className="avatar-wrapper">
              <img
                src={post.user.avatar}
                alt=""
                className="avatar"
              />

              <span className="online-indicator" />
            </div>

            <div>
              <h4>{post.user.name}</h4>

              <span>
                {post.user.username} •{" "}
                {timeAgo()}
              </span>
            </div>
          </div>

          <div className="post-options">
            <button
              className="icon-btn"
              onClick={() =>
                setEditing(!editing)
              }
            >
              <Pencil size={16} />
            </button>

            <button
              className="icon-btn"
              onClick={() =>
                onDelete(post.id)
              }
            >
              <MoreHorizontal
                size={18}
              />
            </button>
          </div>
        </div>

        {/* CONTENT */}

        {editing ? (
          <textarea
            className="edit-post-textarea"
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
          />
        ) : (
          <>
            {/* TEXT */}

            {text && (
              <p className="post-content">
                {text}
              </p>
            )}

            {/* IMAGE */}

            {post.image && (
              <img
                src={post.image}
                alt=""
                className="post-image"
                onClick={() =>
                  setOpenImage(true)
                }
              />
            )}

            {/* AUDIO */}

            {post.audio && (
              <div className="post-audio">
                <div className="audio-header">
                  <div className="audio-wave" />

                  <div>
                    <h4>Audio Post</h4>

                    <span>
                      Uploaded by{" "}
                      {post.user.name}
                    </span>
                  </div>
                </div>

                <CustomAudioPlayer
                  src={post.audio}
                />
              </div>
            )}

            {/* POLL */}

            {post.poll && (
              <PollCard
                poll={post.poll}
              />
            )}
          </>
        )}

        {/* ACTIONS */}

        <PostActions
          post={post}
          onLike={onLike}
          onShare={onShare}
          onSave={onSave}
        />

        <CommentsSection
          post={post}
          onComment={onComment}
        />
      </article>

      {/* IMAGE MODAL */}

      {openImage && (
        <div
          className="image-modal"
          onClick={() =>
            setOpenImage(false)
          }
        >
          <img
            src={post.image}
            alt=""
          />
        </div>
      )}
    </>
  );
}