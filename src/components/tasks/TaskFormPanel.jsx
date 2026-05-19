import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TaskFormPanel({ addTask, selectedDate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Meeting");
  const [startTime, setStartTime] = useState("10:00am");
  const [endTime, setEndTime] = useState("11:30am");

  const categories = ["Meeting", "Design", "Free time", "Travel"];
  const categoryColors = {
    "Meeting": "#ff8fa3",
    "Design": "#7b2cbf",
    "Free time": "#00b4d8",
    "Travel": "#ffb703"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    
    addTask({
      title,
      description,
      category,
      time: `${startTime} - ${endTime}`,
      color: categoryColors[category],
      date: selectedDate
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="h-full flex flex-col">
      <header className="flex justify-between items-center mb-10">
        <button className="p-2 hover:bg-white/30 rounded-xl">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button className="p-2 hover:bg-white/30 rounded-xl">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
        </button>
      </header>

      <h1 className="text-4xl font-black mb-8 tracking-tight">Create New Task</h1>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-8">
        <div>
          <label className="block text-sm font-bold text-secondary mb-4 uppercase tracking-widest">Select Category</label>
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                style={{ backgroundColor: category === cat ? categoryColors[cat] : 'white' }}
                className={`px-6 py-2 rounded-2xl text-sm font-bold transition-all shadow-sm
                  ${category === cat ? "text-white scale-105" : "text-secondary hover:bg-gray-50"}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-premium text-2xl font-bold"
          />
          <textarea 
            placeholder="Add a description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-premium h-32 resize-none text-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-widest">Starts</label>
            <input 
              type="text" 
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="input-premium font-medium"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-secondary mb-2 uppercase tracking-widest">Ends</label>
            <input 
              type="text" 
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="input-premium font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-secondary mb-4 uppercase tracking-widest">Participants</label>
          <div className="flex gap-3 items-center">
            <button type="button" className="w-12 h-12 bg-white/50 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:border-pink-300 hover:text-pink-400 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </button>
            <div className="flex -space-x-4">
                {['E', 'J', 'K'].map((p, i) => (
                    <div key={i} className={`w-12 h-12 rounded-full border-4 border-white flex items-center justify-center text-white font-bold
                        ${i === 0 ? 'bg-cyan-400' : i === 1 ? 'bg-indigo-500' : 'bg-pink-400'}
                    `}>{p}</div>
                ))}
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <button type="submit" className="w-full btn-premium py-6 uppercase tracking-widest text-lg shadow-pink-200">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}
