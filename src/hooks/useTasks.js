import { useState, useEffect } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todo-tasks-v2");
    return savedTasks ? JSON.parse(savedTasks) : [
      {
        id: 1,
        title: "Meeting Team",
        time: "9:00am",
        category: "Meeting",
        color: "#ff8fa3",
        location: "Meeting Room B",
        participants: ["E", "J"],
        alertEnabled: true,
        date: "2021-04-10"
      },
      {
        id: 2,
        title: "Landing Page - Project 1",
        time: "10:00am - 12:30pm",
        category: "Design",
        color: "#7b2cbf",
        location: "Design Studio",
        participants: ["E", "K"],
        alertEnabled: false,
        date: "2021-04-10"
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem("todo-tasks-v2", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
      date: task.date || new Date().toISOString().split('T')[0],
      location: task.location || "Remote",
      participants: task.participants || ["E"],
      alertEnabled: task.alertEnabled ?? false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return { tasks, addTask, deleteTask };
};
