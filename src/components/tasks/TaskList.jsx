import TaskCard from "./TaskCard";

export default function TaskList() {

  const tasks = [
    {
      title: "Design Meeting",
      time: "10:00 AM",
      category: "Meeting",
    },
    {
      title: "Landing Page UI",
      time: "1:00 PM",
      category: "Design",
    },
    {
      title: "Frontend Development",
      time: "4:00 PM",
      category: "Coding",
    },
  ];

  return (
    <div className="space-y-5">

      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}

    </div>
  );
}