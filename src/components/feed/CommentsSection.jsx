import { useState } from "react";

export default function CommentsSection({
  post,
  onComment,
}) {
  const [comment, setComment] =
    useState("");

  function handleSendComment() {
    onComment(post.id, comment);

    setComment("");
  }

  return (
    <div className="comments-section">
      {post.comments.map((comment) => (
        <div
          className="comment"
          key={comment.id}
        >
          <strong>
            {comment.user}
          </strong>

          <p>{comment.text}</p>
        </div>
      ))}

      <div className="comment-input">
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) =>
            setComment(e.target.value)
          }
        />

        <button
          onClick={handleSendComment}
        >
          Send
        </button>
      </div>
    </div>
  );
}