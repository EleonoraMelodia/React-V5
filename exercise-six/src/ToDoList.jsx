import classes from "./ToDoList.module.scss";
import { useRef, useState } from "react";

export function ToDoList() {
  const [items, setItems] = useState([]);
  const inputRef = useRef();

  function handleButton() {
    setItems([...items, inputRef.current.value]);
    inputRef.current.value = "";
  }

  function handleResetButton() {
    setItems([]);
  }

  function handleRemoveButton(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  return (
    <>
      <ul className={classes.listCont}>
        {items.map((item, index) => (
          <li className={classes.lists} key={index}>
            {item}
            <button
              className={classes.button}
              onClick={() => handleRemoveButton(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input className={classes.input} ref={inputRef} type="text" />
      <button className={classes.button} onClick={handleButton}>
        To do
      </button>
      <button className={classes.button} onClick={handleResetButton}>
        Reset the list
      </button>
    </>
  );
}
