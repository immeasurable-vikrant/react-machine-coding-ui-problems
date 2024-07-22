
import { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState<any>([]);
  const [history, setHistory] = useState<any>({
    past: [],
    present: [],
    future: [],
  });
  const [value, setValue] = useState("");

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    if (value) {
      const newTasks = [...tasks, value];
      setTasks(newTasks);

      setHistory((prevHistory: any) => ({
        past: [...prevHistory.past, prevHistory.present],
        present: newTasks,
        future: []
      }));
      setValue("");
    }
  };

  console.log("history", history)

  const handleRemoveItem = (task: any) => {
    let filtered = tasks.filter((t: any) => t !== task);
    setTasks(filtered);

    setHistory((prevHistory: any) => ({
        past: [...prevHistory.past, prevHistory.present],
        present: filtered,
        future: []
      }));
      setValue("");

  };

  const handleUndo = () => {
        if (history.past.length > 0) {
          const previousState = history.past[history.past.length - 1];
          console.log("previousState", previousState)
          setHistory((prevHistory: any) => ({
            past: prevHistory.past.slice(0, -1),
            present: previousState,
            future: [prevHistory.present, ...prevHistory.future]
          }));
          setTasks(previousState);
        }
      };

      const handleRedo = () => {
        if (history.future.length > 0) {
          const nextState = history.future[0];
          setHistory((prevHistory: any) => ({
            past: [...prevHistory.past, prevHistory.present],
            present: nextState,
            future: prevHistory.future.slice(1)
          }));
          setTasks(nextState);
        }
      };

  return (
    <div>
      <h2>To do App</h2>

      <div>
        <input type="text" onChange={handleInputChange} />
        <button onClick={addTodo}>Add</button>
        <button onClick={handleUndo} disabled={history.past.length === 0}>
          Undo
        </button>
        <button onClick={handleRedo} disabled={history.future.length === 0}>
          Redo
        </button>
      </div>

      {tasks.map((task: any) => {
        return (
          <div
            style={{
              border: "1px solid",
              borderRadius: "8px",
              height: "24px",
              width: "100%",
              padding: "16px",
              margin: "16px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{task}</span>
            <button
              onClick={() => handleRemoveItem(task)}
              style={{ fontSize: "12px" }}
            >
              ❌
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoApp;
