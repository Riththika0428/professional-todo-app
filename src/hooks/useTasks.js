import { useState, useEffect } from "react";

export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todo-tasks");
    return savedTasks ? JSON.parse(savedTasks) : [
      {
        id: 1,
        title: "Meeting Team",
        time: "9:00am",
        category: "Meeting",
        color: "#ff8fa3",
        date: new Date().toISOString().split('T')[0]
      },
      {
        id: 2,
        title: "Landing Page - Project 1",
        time: "10:00am - 12:30pm",
        category: "Design",
        color: "#7b2cbf",
        date: new Date().toISOString().split('T')[0]
      },
      {
        id: 3,
        title: "Lunch with Emma",
        time: "13:30pm",
        category: "Free time",
        color: "#00b4d8",
        date: new Date().toISOString().split('T')[0]
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
      date: task.date || new Date().toISOString().split('T')[0]
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return { tasks, addTask, deleteTask };
};
