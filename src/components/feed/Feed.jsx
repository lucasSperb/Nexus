import PostCard from "./PostCard";

export default function Feed({
  posts,
  onLike,
  onDelete,
  onComment,
  onShare,
  onSave,
}) {
  return (
    <div className="feed">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onLike={onLike}
          onDelete={onDelete}
          onComment={onComment}
          onShare={onShare}
          onSave={onSave}
        />
      ))}
    </div>
  );
}