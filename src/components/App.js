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

  function handleUpdateItem(id, updatedFields) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, ...updatedFields } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearItemsList() {
    const confirmedClearList = window.confirm(
      "Are you sure you want to clear all items?"
    );
    if (confirmedClearList) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onUpdateItem={handleUpdateItem}
        onDeleteItem={handleDeleteItem}
        onClearItemsList={handleClearItemsList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
