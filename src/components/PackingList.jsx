import React, { useState } from "react";

import Item from "./Item";

function PackingList({ items, onUpdateItem, onDeleteItem, onClearItemsList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  switch (sortBy) {
    case "input": {
      sortedItems = items;
      break;
    }
    case "description": {
      // We don't want to mutate the original items --> use slice
      sortedItems = items.slice().sort(
        (item1, item2) => item1.description.localeCompare(item2.description) // Compare string
      );
      break;
    }
    case "packed": {
      // We don't want to mutate the original items --> use slice
      sortedItems = items
        .slice()
        .sort((item1, item2) => Number(item1.packed) - Number(item2.packed)); // Compare boolean
      break;
    }
    default: {
      sortedItems = items;
    }
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onToggleItem={onUpdateItem}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          name="sortingCriteria"
          id="sortingCriteria"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItemsList}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
