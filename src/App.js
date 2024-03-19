import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([
    {
      completed: true,
      label: "Learn React",
    },
    {
      completed: true,
      label: "Learn React",
    },
    {
      completed: true,
      label: "Learn React",
    },
  ]);

  const completed = items.filter((item) => item.completed == true).length || 0;

  return (
    <div className="app">
      <h1 className="app__title">My ToDo List</h1>
      <p className="todoCounter">{`${completed} Completed`}</p>
      <form
        className="todoForm"
        onSubmit={(ev) => {
          ev.preventDefault();

          const updatedItems = [
            ...items,
            {
              completed: false,
              label: value,
            },
          ];

          setItems(updatedItems);
        }}
      >
        <input
          className="todoForm__input"
          type="text"
          value={value}
          placeholder="Add task"
          onChange={(ev) => {
            setValue(ev.target.value);
          }}
        />
        <button className="todoForm__submitButton" type="submit">
          Ok
        </button>
      </form>
      <ul className="todoList">
        {items.map((item, index) => {
          const className = item.completed
            ? "todoList__item todoList__item--completed"
            : "todoList__item";

          return (
            <li
              key={index}
              className={className}
              onClick={() => {
                const uptadedItems = items.map((oldItem, oldIndex) => {
                  return {
                    completed:
                      oldIndex == index
                        ? !oldItem.completed
                        : oldItem.completed,
                    label: oldItem.label,
                  };
                });

                setItems(uptadedItems);
              }}
            >
              <span className="todoList__itemLabel">{item.label}</span>
              <button className="todoList__deleteButton" onClick={(ev) => {
                ev.stopPropagation()
                const updatedItems = [...items];
                updatedItems.splice(index, 1);
                setItems(updatedItems);
                }}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
