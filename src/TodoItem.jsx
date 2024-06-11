/* eslint-disable react/prop-types */
import { useState } from "react";

function TodoItem({ completed, id, title, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    editTodo(id, newTitle);
    setIsEditing(false);
  }

  function handleCancel() {
    setIsEditing(false);
    setNewTitle(title);
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            className="edit-title"
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button className="btn btn-success" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-danger" onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <>
          <label>
            <input
              className="checks"
              type="checkbox"
              checked={completed}
              onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            {title}
          </label>
          <button className="btn btn-primary" onClick={handleEdit}>
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;

{
  /* <button className="btn btn-seconday" onClick={() => editTodo(id, title)}>
edit
</button> */
}
