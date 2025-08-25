import React from "react";

function Stats({ items }) {
  // Early return
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding items to your packing list. 🌟</em>
      </footer>
    );

  // Derived State
  const itemsCount = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const finishedPercentage =
    Math.round((packedItems / itemsCount) * 10000) / 100;

  return (
    <footer className="stats">
      <em>
        {finishedPercentage === 100
          ? "You got everything. Ready to go! 🐋"
          : ` 🐉 You have ${itemsCount} items on your list, and you already packed
        ${packedItems} (${finishedPercentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;
