import React from "react";

function Item({ item, onCheckBoxClick }) {
  function handleCheckBoxChange() {}

  return (
    <li>
      <input type="checkbox" onChange={handleCheckBoxChange} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
