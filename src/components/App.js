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

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onUpdateItems={handleUpdateItems} />
      <Stats />
    </div>
  );
}

export default App;
