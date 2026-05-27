export default function timeAgo() {
  const values = [
    "1m",
    "5m",
    "12m",
    "25m",
    "1h",
    "3h",
    "5h",
  ];

  return values[
    Math.floor(
      Math.random() * values.length
    )
  ];
}