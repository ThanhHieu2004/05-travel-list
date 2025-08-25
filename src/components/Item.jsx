import React from "react";

function Item({ item, onToggleItem, onDeleteItem }) {
  function handleToggleItem(item) {
    const updatedFields = { packed: !item.packed };
    onToggleItem(item.id, updatedFields);
  }

  function handleDeleteItem(item) {
    const isConfirmedToDelete = window.confirm(
      `Do you want to delete this item: ${item.quantity} ${item.description}?`
    );
    isConfirmedToDelete && onDeleteItem(item.id);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handleToggleItem(item)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item)}>❌</button>
    </li>
  );
}

export default Item;
