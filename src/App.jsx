import React, { useState } from "react";
import CalendarCard from "./components/calendar/CalendarCard";
import ScheduleList from "./components/tasks/ScheduleList";
import TaskFormPanel from "./components/tasks/TaskFormPanel";
import { useTasks } from "./hooks/useTasks";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const { tasks, addTask, deleteTask } = useTasks();
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <div className="min-h-screen p-4 md:p-10 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Left Panel: Calendar & Schedule */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-effect rounded-[3rem] p-8 min-h-[800px] flex flex-col"
        >
          <div className="flex justify-between items-center mb-8">
            <button className="p-2 hover:bg-white/20 rounded-xl transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <button className="p-2 hover:bg-white/20 rounded-xl transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          <CalendarCard selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          
          <div className="mt-10 flex-1 flex flex-col">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              Schedule
              <span className="w-8 h-0.5 bg-gray-300 ml-2"></span>
            </h2>
            <ScheduleList tasks={tasks.filter(t => t.date === selectedDate)} deleteTask={deleteTask} />
          </div>

          {/* Bottom Nav Mockup */}
          <div className="mt-8 flex justify-around bg-white/30 backdrop-blur-md rounded-2xl p-4">
             <button className="p-2 text-pink-500"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg></button>
             <button className="p-2 text-gray-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg></button>
             <button className="p-2 text-gray-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg></button>
             <button className="p-2 text-gray-500"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></button>
          </div>
        </motion.div>

        {/* Right Panel: Create Task */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-effect rounded-[3rem] p-8 min-h-[800px]"
        >
          <TaskFormPanel addTask={addTask} selectedDate={selectedDate} />
        </motion.div>

      </div>

      {/* Floating Add Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 w-16 h-16 bg-premium-purple text-white rounded-full shadow-2xl flex items-center justify-center"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </motion.button>
    </div>
  );
}