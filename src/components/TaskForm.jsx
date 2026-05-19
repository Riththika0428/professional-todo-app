// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// export default function TaskForm({ addTask }) {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [dueDate, setDueDate] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!title.trim()) return;

//     addTask({
//       id: uuidv4(),
//       title,
//       category,
//       dueDate,
//       completed: false,
//     });

//     setTitle("");
//     setCategory("");
//     setDueDate("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Task title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//       />

//       <input
//         type="text"
//         placeholder="Category"
//         value={category}
//         onChange={(e) => setCategory(e.target.value)}
//       />

//       <input
//         type="date"
//         value={dueDate}
//         onChange={(e) => setDueDate(e.target.value)}
//       />

//       <button type="submit">Add Task</button>
//     </form>
//   );
// }

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask({
      id: uuidv4(),
      title,
      category,
      dueDate,
      completed: false,
    });

    setTitle("");
    setCategory("");
    setDueDate("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}