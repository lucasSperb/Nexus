const users = [
  "Lucas",
  "Ana",
  "Maria",
  "John",
  "Pedro",
  "Julia",
];

export default function StoriesBar() {
  return (
    <section className="stories-bar">
      {users.map((user, index) => (
        <div
          className="story"
          key={index}
        >
          <img
            src={`https://i.pravatar.cc/100?img=${
              index + 1
            }`}
            alt=""
          />

          <span>{user}</span>
        </div>
      ))}
    </section>
  );
}