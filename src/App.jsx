import React, { useState } from "react";
import CalendarCard from "./components/calendar/CalendarCard";
import ScheduleList from "./components/tasks/ScheduleList";
import TaskFormPanel from "./components/tasks/TaskFormPanel";
import { useTasks } from "./hooks/useTasks";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

function DashboardContent() {
  const { tasks, addTask, deleteTask } = useTasks();
  const { user } = useAuth();
  const [selectedDate, setSelectedDate] = useState("2021-04-10");

  return (
    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
        
        {/* Left Panel: Calendar & Schedule */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-effect rounded-[4rem] p-10 min-h-[900px] flex flex-col shadow-2xl overflow-hidden"
        >
          <div className="flex justify-between items-center mb-10">
            <button className="p-3 hover:bg-white/40 rounded-2xl transition-all shadow-sm bg-white/20">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <div className="flex items-center gap-4">
                 <button className="p-3 hover:bg-white/40 rounded-2xl transition-all shadow-sm bg-white/20">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg border-2 border-white"
                    style={{ backgroundColor: user?.color || '#ff8fa3' }}
                >
                    {user?.avatar || '?'}
                </div>
            </div>
          </div>

          <CalendarCard selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          
          <div className="mt-12 flex-1 flex flex-col min-h-0">
            <h2 className="text-3xl font-black mb-8 flex items-center gap-4 tracking-tighter">
              Schedule
              <div className="flex-1 h-[2px] bg-gradient-to-r from-gray-300 to-transparent"></div>
            </h2>
            <ScheduleList tasks={tasks.filter(t => t.date === selectedDate)} deleteTask={deleteTask} />
          </div>

          {/* Bottom Nav */}
          <div className="mt-10 flex justify-around bg-white/40 backdrop-blur-xl rounded-[2rem] p-5 shadow-inner border border-white/30">
             <button className="p-3 text-pink-500 bg-white shadow-sm rounded-2xl"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/></svg></button>
             <button className="p-3 text-gray-500 hover:text-pink-400 transition-all"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg></button>
             <button className="p-3 text-gray-500 hover:text-pink-400 transition-all"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg></button>
             <button className="p-3 text-gray-500 hover:text-pink-400 transition-all"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></button>
          </div>
        </motion.div>

        {/* Right Panel: Create Task */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-effect rounded-[4rem] p-10 min-h-[900px] shadow-2xl border border-white/40"
        >
          <TaskFormPanel addTask={addTask} selectedDate={selectedDate} />
        </motion.div>

    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen p-6 md:p-12 flex items-center justify-center relative bg-fixed overflow-hidden">
        {/* Background Decorative Blurs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-300/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-300/30 rounded-full blur-[120px]"></div>
        
        <DashboardContent />

        {/* Floating Add Button Mockup */}
        <motion.button 
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-12 right-12 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-[2rem] shadow-[0_15px_35px_rgba(255,92,141,0.4)] flex items-center justify-center z-50 border-4 border-white/50"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </motion.button>
      </div>
    </AuthProvider>
  );
}