import React from "react";

import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function PackingList({ items, onUpdateItems, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onCheckBoxClick={onUpdateItems}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
