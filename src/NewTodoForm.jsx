/* eslint-disable react/prop-types */
import { useState } from "react";

function NewTodoForm(props) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    props.onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          name="item"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}

export default NewTodoForm;
