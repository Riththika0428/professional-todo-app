import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  deleteTask,
  toggleComplete,
}) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}