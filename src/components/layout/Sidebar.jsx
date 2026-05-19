import {
  FaHome,
  FaCalendar,
  FaTasks,
  FaCog,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-20 bg-white shadow-lg min-h-screen flex flex-col items-center py-8 gap-8">

      <div className="text-2xl font-bold text-pink-500">
        T
      </div>

      <FaHome className="text-gray-500 text-xl cursor-pointer hover:text-pink-500" />

      <FaCalendar className="text-gray-500 text-xl cursor-pointer hover:text-pink-500" />

      <FaTasks className="text-pink-500 text-xl cursor-pointer" />

      <FaCog className="text-gray-500 text-xl cursor-pointer hover:text-pink-500" />

    </aside>
  );
}