export default function LoadingFeed() {
  return (
    <>
      {[1, 2, 3].map((item) => (
        <div
          className="loading-post"
          key={item}
        >
          <div className="loading-avatar" />

          <div className="loading-lines">
            <div />
            <div />
            <div />
          </div>
        </div>
      ))}
    </>
  );
}