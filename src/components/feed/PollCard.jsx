import { useState } from "react";

export default function PollCard({
  poll,
}) {
  const [options, setOptions] =
    useState(poll.options);

  const [hasVoted, setHasVoted] =
    useState(false);

  const [selectedOption, setSelectedOption] =
    useState(null);

  function vote(index) {
    /* impede múltiplos votos */

    if (hasVoted) return;

    const updated = [...options];

    updated[index].votes += 1;

    setOptions(updated);

    setHasVoted(true);

    setSelectedOption(index);
  }

  const totalVotes =
    options.reduce(
      (acc, option) =>
        acc + option.votes,
      0
    );

  return (
    <div className="poll-card">
      <h4>{poll.question}</h4>

      <div className="poll-options">
        {options.map(
          (option, index) => {
            const percentage =
              totalVotes === 0
                ? 0
                : (
                    (option.votes /
                      totalVotes) *
                    100
                  ).toFixed(0);

            return (
              <button
                key={index}
                className={`poll-option ${
                  selectedOption ===
                  index
                    ? "selected-poll-option"
                    : ""
                }`}
                onClick={() =>
                  vote(index)
                }
                disabled={hasVoted}
              >
                <div
                  className="poll-fill"
                  style={{
                    width: `${percentage}%`,
                  }}
                />

                <span>
                  {option.text}
                </span>

                <strong>
                  {percentage}%
                </strong>
              </button>
            );
          }
        )}
      </div>

      <span className="poll-total">
        {totalVotes} votes
      </span>
    </div>
  );
}