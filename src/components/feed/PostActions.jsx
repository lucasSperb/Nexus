import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
} from "lucide-react";

export default function PostActions({
  post,
  onLike,
  onShare,
  onSave,
}) {
  return (
    <div className="post-actions">
      <button
        className={
          post.liked
            ? "liked-button"
            : ""
        }
        onClick={() =>
          onLike(post.id)
        }
      >
        <Heart size={18} />

        {post.likes}
      </button>

      <button>
        <MessageCircle size={18} />

        {post.comments.length}
      </button>

      <button
        onClick={() =>
          onShare(post)
        }
      >
        <Share2 size={18} />
      </button>

      <button
        onClick={() =>
          onSave(post)
        }
      >
        <Bookmark size={18} />
      </button>
    </div>
  );
}