import React from "react";
import { motion } from "framer-motion";

export default function CalendarCard({ selectedDate, setSelectedDate }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  // Hardcoded for April 2021 as in the image, or modern equivalent
  // For the sake of matching the "April 2021" in the image:
  const currentMonth = "April 2021";
  
  const generateDays = () => {
    const arr = [];
    for (let i = 1; i <= 30; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <div className="text-primary">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">{currentMonth}</h2>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-white/30 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button className="p-1 hover:bg-white/30 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center mb-4">
        {days.map(day => (
          <span key={day} className="text-secondary text-sm font-medium py-2">{day}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {generateDays().map(day => {
          const dateStr = `2021-04-${day.toString().padStart(2, '0')}`;
          const isSelected = selectedDate === dateStr;
          const isToday = day === 10; // Highlight 10 as in image

          return (
            <motion.button
              key={day}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDate(dateStr)}
              className={`
                relative h-12 flex items-center justify-center rounded-2xl text-lg font-semibold transition-all
                ${isSelected ? "bg-premium-pink text-white shadow-lg" : "hover:bg-white/40"}
                ${isToday && !isSelected ? "text-pink-500" : ""}
              `}
            >
              {day}
              {day === 12 || day === 18 || day === 22 ? (
                <span className="absolute bottom-2 w-1 h-1 bg-pink-500 rounded-full"></span>
              ) : null}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}