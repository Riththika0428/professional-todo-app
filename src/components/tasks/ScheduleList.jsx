import React from "react";
import TaskCard from "./TaskCard";
import { motion, AnimatePresence } from "framer-motion";

export default function ScheduleList({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-secondary opacity-50 italic">
        <p>No tasks for this day</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto pr-2 space-y-4 hide-scrollbar">
      <AnimatePresence mode="popLayout">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </AnimatePresence>
    </div>
  );
}
