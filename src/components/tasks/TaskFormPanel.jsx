import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TaskFormPanel({ addTask, selectedDate }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Meeting");
  const [startTime, setStartTime] = useState("10:00am");
  const [endTime, setEndTime] = useState("11:30am");
  const [location, setLocation] = useState("");
  const [alertEnabled, setAlertEnabled] = useState(true);
  const [selectedParticipants, setSelectedParticipants] = useState(["E"]);

  const categories = ["Meeting", "Design", "Free time", "Travel"];
  const categoryColors = {
    "Meeting": "#ff8fa3",
    "Design": "#7b2cbf",
    "Free time": "#00b4d8",
    "Travel": "#ffb703"
  };

  const participantOptions = [
    { id: "E", color: "bg-cyan-400", name: "Emma" },
    { id: "J", color: "bg-indigo-500", name: "John" },
    { id: "K", color: "bg-pink-400", name: "Kate" }
  ];

  const toggleParticipant = (id) => {
    setSelectedParticipants(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
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
      date: selectedDate,
      location,
      alertEnabled,
      participants: selectedParticipants
    });

    setTitle("");
    setDescription("");
    setLocation("");
  };

  return (
    <div className="h-full flex flex-col">
      <header className="flex justify-between items-center mb-10">
        <button className="p-2 hover:bg-white/30 rounded-xl transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button className="p-2 hover:bg-white/30 rounded-xl transition-all">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg>
        </button>
      </header>

      <h1 className="text-4xl font-black mb-8 tracking-tight">Create New Task</h1>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6 hide-scrollbar overflow-y-auto pr-2">
        <div>
          <label className="block text-xs font-bold text-secondary mb-3 uppercase tracking-widest">Select Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                style={{ backgroundColor: category === cat ? categoryColors[cat] : 'rgba(255,255,255,0.5)' }}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm
                  ${category === cat ? "text-white scale-105" : "text-secondary hover:bg-white/80"}
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input-premium text-xl font-bold bg-white/40 group-focus-within:bg-white/60 transition-all"
            />
          </div>
          <div className="relative group">
            <textarea 
              placeholder="Add a description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-premium h-24 resize-none text-base bg-white/40 group-focus-within:bg-white/60 transition-all font-medium"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <label className="block text-xs font-bold text-secondary mb-2 uppercase tracking-widest flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3" /></svg> Starts
            </label>
            <input 
              type="text" 
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="input-premium font-bold text-sm bg-white/40"
            />
          </div>
          <div className="relative">
            <label className="block text-xs font-bold text-secondary mb-2 uppercase tracking-widest flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3" /></svg> Ends
            </label>
            <input 
              type="text" 
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="input-premium font-bold text-sm bg-white/40"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-secondary mb-3 uppercase tracking-widest">Participants</label>
          <div className="flex gap-2 items-center">
            <button type="button" className="w-10 h-10 bg-white/40 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-gray-400 hover:border-pink-300 hover:text-pink-400 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </button>
            <div className="flex gap-2">
                {participantOptions.map((p) => (
                    <button
                        key={p.id}
                        type="button"
                        onClick={() => toggleParticipant(p.id)}
                        className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-white font-bold text-sm transition-all
                            ${p.color} 
                            ${selectedParticipants.includes(p.id) ? 'border-pink-500 scale-110 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'}
                        `}
                    >
                        {p.id}
                    </button>
                ))}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-secondary mb-2 uppercase tracking-widest">Location</label>
          <div className="relative">
             <input 
                type="text"
                placeholder="Select a location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="input-premium text-sm bg-white/40 font-medium"
             />
             <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-white/30 rounded-2xl border border-white/20">
           <span className="text-sm font-bold text-secondary">Get alert for this task</span>
           <button 
             type="button"
             onClick={() => setAlertEnabled(!alertEnabled)}
             className={`w-12 h-6 rounded-full transition-all relative ${alertEnabled ? 'bg-pink-400' : 'bg-gray-300'}`}
           >
             <motion.div 
               animate={{ x: alertEnabled ? 24 : 2 }}
               className="w-5 h-5 bg-white rounded-full absolute top-0.5 shadow-sm"
             />
           </button>
        </div>

        <div className="mt-4 pb-4">
          <button type="submit" className="w-full btn-premium py-5 uppercase tracking-widest text-lg font-black shadow-pink-200">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}
