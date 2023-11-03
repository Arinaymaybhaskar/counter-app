import React, { useState } from "react";

function Counter({ name, onDelete }) {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [CounterName, setCounterName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleButtonClick = () => {
    setIsEditing(true);
  };

  const handleInputKeyDown = (e) => {
    if (e.keyCode === 13) {
      setIsEditing(false);
    }
  };

  const changeName = (name) => {
    setCounterName(name);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleInputChange = (e) => {
    setInputValue(Number(e.target.value));
  };

  const setCounterValue = () => {
    setCount(inputValue);
  };

  const resetToInputValue = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <div className="edit-name">
        {isEditing ? (
          <input
            className="input-name"
            value={CounterName}
            onChange={(e) => changeName(e.target.value)}
            onKeyDown={handleInputKeyDown}
          />
        ) : (
          <button className="edit" onClick={handleButtonClick}>
            <span class="material-symbols-outlined">edit</span>
          </button>
        )}
      </div>
      <div className="counter-name">
        <h2 className="counter-heading">{CounterName}</h2>
      </div>
      <p className="count-value">{count}</p>
      <div className="value-container">
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          className="counter-input"
        />
        <button onClick={setCounterValue} className="button set-button">
          Set Value
        </button>
      </div>
      <div>
        <button onClick={decrement} className="button decrement-button">
          Decrement
        </button>
        <button onClick={increment} className="button increment-button">
          Increment
        </button>
      </div>
      <div>
        <button onClick={resetToInputValue} className="button reset-button">
          Reset
        </button>
        <button onClick={onDelete} className="button delete-button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Counter;
