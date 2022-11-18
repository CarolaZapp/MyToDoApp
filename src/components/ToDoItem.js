import "./ToDoItem.css";

const ToDoItem = ({ text, done, id, date, taskObj, tasksList, dispatch }) => {
  return (
    <li className="itemList">
      <div className="firstLine">
        <p className="textInput">{text}</p>
        <p>
          cancel
          <button
            className="itemClose"
            onClick={() => {
              const newList = tasksList.filter((task) => task !== taskObj);
              dispatch({ type: "deleteTodo", newList: newList });
              localStorage.setItem("liste", JSON.stringify(newList));
            }}
          >
            [x]
          </button>
        </p>
      </div>
      <div className="secondLine">
        <p className="doneUntil">To be done until: {date} </p>
        <p>
          done ?
          <input
            className="checkbox"
            type="checkbox"
            id="checkbox"
            checked={done}
            onChange={() => dispatch({ type: "toggleDone", payload: id })}
          />
        </p>
      </div>
    </li>
  );
};

export default ToDoItem;
