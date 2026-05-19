import { motion } from "framer-motion";

export default function TaskCard({ task }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-3xl p-6 shadow-sm"
    >

      <div className="flex justify-between items-center">

        <div>
          <h3 className="text-xl font-bold">
            {task.title}
          </h3>

          <p className="text-gray-500 mt-2">
            {task.time}
          </p>
        </div>

        <span className="bg-pink-100 text-pink-500 px-4 py-2 rounded-full text-sm">
          {task.category}
        </span>

      </div>

    </motion.div>
  );
}