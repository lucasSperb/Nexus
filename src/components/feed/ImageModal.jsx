export default function ImageModal({
  image,
  onClose,
}) {
  if (!image) return null;

  return (
    <div
      className="image-modal"
      onClick={onClose}
    >
      <img
        src={image}
        alt=""
      />
    </div>
  );
}