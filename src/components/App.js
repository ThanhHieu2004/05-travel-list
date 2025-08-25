import React, { useState } from "react";

import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems([...items, item]);
  }

  function handleUpdateItems(newItem, id) {
    items.map((item) => (item.id === id ? (item = newItem) : item));
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onUpdateItem={handleUpdateItems}
        onDeleteItem={handleDeleteItem}
      />
      <Stats />
    </div>
  );
}

export default App;
