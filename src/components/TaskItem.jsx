// export default function TaskItem({
//   task,
//   deleteTask,
//   toggleComplete,
// }) {
//   return (
//     <div
//       style={{
//         border: "1px solid #ccc",
//         padding: "15px",
//         marginTop: "10px",
//         borderRadius: "10px",
//       }}
//     >
//       <h3
//         style={{
//           textDecoration: task.completed ? "line-through" : "none",
//         }}
//       >
//         {task.title}
//       </h3>

//       <p>Category: {task.category}</p>
//       <p>Due: {task.dueDate}</p>

//       <button onClick={() => toggleComplete(task.id)}>
//         Complete
//       </button>

//       <button onClick={() => deleteTask(task.id)}>
//         Delete
//       </button>
//     </div>
//   );
// }

export default function TaskItem({
  task,
  deleteTask,
  toggleComplete,
}) {
  return (
    <div className="task-card">
      <div className="task-top">
        <h2
          className={`task-title ${
            task.completed ? "completed" : ""
          }`}
        >
          {task.title}
        </h2>
      </div>

      <div className="task-info">
        <p>📁 {task.category}</p>
        <p>📅 {task.dueDate}</p>
      </div>

      <div className="task-actions">
        <button
          className="complete-btn"
          onClick={() => toggleComplete(task.id)}
        >
          Complete
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}