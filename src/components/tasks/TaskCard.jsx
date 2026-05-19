import React from "react";
import { motion } from "framer-motion";

export default function TaskCard({ task, deleteTask }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 400 } }}
      className="bg-white/50 backdrop-blur-md rounded-[2.5rem] p-6 flex items-center gap-6 group relative border border-white/40 shadow-sm"
    >
      <div 
        className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center shadow-lg border-2 border-white/50"
        style={{ backgroundColor: `${task.color}25`, color: task.color }}
      >
        {task.category === "Meeting" && <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
        {task.category === "Design" && <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
        {task.category === "Free time" && <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        {task.category === "Travel" && <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-black text-primary truncate tracking-tight">{task.title}</h3>
            {task.alertEnabled && <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>}
        </div>
        <div className="flex flex-col gap-1">
            <span className="text-secondary text-sm font-bold opacity-80 flex items-center gap-2 uppercase tracking-widest">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3" /></svg>
                {task.time}
            </span>
            {task.location && (
                <span className="text-secondary/70 text-xs font-bold flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                    {task.location}
                </span>
            )}
        </div>
      </div>

      <div className="flex items-center">
            <div className="flex -space-x-3 group-hover:space-x-1 transition-all duration-500">
                {task.participants?.map((p, i) => (
                    <div 
                        key={i} 
                        className={`w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black text-white shadow-sm
                            ${p === 'E' ? 'bg-cyan-400' : p === 'J' ? 'bg-indigo-500' : 'bg-pink-400'}
                        `}
                    >
                        {p}
                    </div>
                ))}
            </div>
      </div>

      <button 
        onClick={() => deleteTask(task.id)}
        className="opacity-0 group-hover:opacity-100 p-2 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all absolute top-2 right-2 duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </motion.div>
  );
}