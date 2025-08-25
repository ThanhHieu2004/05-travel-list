import React from "react";

function Stats({ items }) {
  // Derived State
  const itemsCount = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const finishedPercentage =
    Math.round((packedItems / itemsCount) * 10000) / 100;

  return (
    <footer className="stats">
      <em>
        🐉 You have {itemsCount} items on your list, and you already packed{" "}
        {packedItems} ({finishedPercentage}%)
      </em>
    </footer>
  );
}

export default Stats;
